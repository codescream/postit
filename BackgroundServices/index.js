import express from "express";
import cron from "node-cron";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const port = process.env.PORT || 8001;
const db = process.env.DB;
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("Background services running!");
});

app.listen(port, () => {
  // DB connection
  mongoose
    .connect(db)
    .then((res) => {
      console.log("Connected to DB")
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Backgound services running on port ${port}`);
})