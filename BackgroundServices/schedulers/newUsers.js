import cron from "node-cron";
import UserModel from "../models/User.js";
import CryptoJs from "crypto-js";
import { configDotenv } from "dotenv";
import ejs from "ejs";
import sendMail from "../helpers/sendmail.js";

configDotenv();

const newUserScheduler = () => {
  cron.schedule("* * * * *", () => {
    console.log("checking new users");
    newUsers();
  });
};

const newUsers = async () => {
  const users = await UserModel.find({ status: 0 }).select(
    "name email password"
  );

  if (users.length) {
    users.forEach((user) => {
      const password = CryptoJs.AES.decrypt(
        user.password,
        process.env.KEY
      ).toString(CryptoJs.enc.Utf8);

      ejs.renderFile(
        "templates/welcome.ejs",
        {
          fullname: user.name,
          email: user.email,
          password: password,
        },
        async (err, template) => {
          if (!err && template) {
            let messageOptions = {
              from: process.env.EMAIL,
              to: user.email,
              subject: `Welcome to PostIT - ${user.name}`,
              html: template,
            };
            try {
              sendMail(messageOptions);

              await UserModel.findByIdAndUpdate(
                { _id: user._id },
                { status: 1 }
              );
            } catch (error) {
              console.log(error);
            }
          } else {
            console.log(err);
          }
        }
      );
    });
  } else {
    console.log("No new user found...");
  }
};

export default newUserScheduler;
