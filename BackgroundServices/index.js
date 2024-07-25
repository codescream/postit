import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import {
  newUserScheduler,
  pendingParcelsScheduler,
  deliveredParcelsScheduler,
} from "./schedulers/index.js";

configDotenv();
newUserScheduler();
pendingParcelsScheduler();
deliveredParcelsScheduler();

const app = express();

const port = process.env.PORT || 8001;
const db = process.env.DB;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Background services running!");
});

app.listen(port, () => {
  // DB connection
  mongoose
    .connect(db)
    .then((res) => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Backgound services running on port ${port}`);
});
