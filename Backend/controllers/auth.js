import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import UserModel from "../models/user.js";
import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

export const register = async (req, res) => {
  const { body } = req;

  console.log("registering...");
  const newUser = UserModel({
    ...body,
    password: CryptoJS.AES.encrypt(body.password, process.env.KEY).toString(),
  });

  try {
    const user = await newUser.save();

    const { password: pwd, ...data } = user.toObject();
    res.status(201).json({ data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const authenticate = async (req, res) => {
  const { body } = req;
  const secretKey = process.env.CAPTCHA_KEY;
  console.log(body);
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.recaptchaValue}`
    );

    const data = response.data;

    if (data.success) {
      const user = await UserModel.findOne({ email: body.email });

      if (!user) return res.status(401).json("User not found");

      const decryptPass = CryptoJS.AES.decrypt(user.password, process.env.KEY);
      const origPass = decryptPass.toString(CryptoJS.enc.Utf8);

      if (origPass !== body.password)
        return res.status(500).json("Problem with username or password");

      const { password, ...info } = user._doc;

      const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SEC,
        { expiresIn: "10d" }
      );

      res.status(200).json({ ...info, accessToken });
    } else {
      res.status(400).json("reCAPTCHA verification failed.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
