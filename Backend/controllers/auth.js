import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import UserModel from '../models/user.js';
import { configDotenv } from 'dotenv';

configDotenv();

export const register = async (req, res) => {
  const { body } = req.body;
  console.log('registering...');
  const newUser = UserModel({
    fullname: body.fullname,
    email: body.email,
    age: body.age,
    country: body.country,
    address: body.address,
    password: CryptoJS.AES.encrypt(body.password, process.env.KEY).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  }catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export const authenticate = async (req, res) => {
  const { body } = req.body;
  try {
    const user = await UserModel.findOne({ email: body.email });

    if(!user)
      return res.status(401).json('User not found');

    const decryptPass = CryptoJS.AES.decrypt(user.password, process.env.KEY);
    const origPass = decryptPass.toString(CryptoJS.enc.Utf8);

    if(origPass !== body.password)
      return res.status(500).json('Problem with username or password');

    const { password, ...info } = user._doc;

    const accessToken = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SEC, {expiresIn: "10d"});

    res.status(200).json({...info, accessToken});
  }catch (error) {
    res.status(500).json({error: error});
  }
}