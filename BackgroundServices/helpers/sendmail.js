import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();

const createTransport = (config) => {
  const transporter = nodemailer.createTransport(config);

  return transporter;
};

const configurations = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
};

const sendMail = (messageOptions) => {
  const transporter = createTransport(configurations);

  transporter.verify((err, succ) => {
    if (err) throw new Error(err);

    transporter.sendMail(messageOptions, (err, info) => {
      if (err) throw new Error(err);

      console.log(info.response);
    });
  });
};

export default sendMail;
