import ejs from "ejs";
import { configDotenv } from "dotenv";
import ParcelModel from "../models/Parcel.js";
import cron from "node-cron";
import sendMail from "../helpers/sendmail.js";

configDotenv();

const deliveredParcelsScheduler = () => {
  cron.schedule("* * * * *", () => {
    console.log("finding newly delivered parcels...");
    deliveredParcel();
  });
};

const deliveredParcel = async () => {
  const parcels = await ParcelModel.find({ status: 2 });

  if (parcels.length) {
    parcels.forEach((parcel) => {
      ejs.renderFile(
        "templates/deliveredparcel.ejs",
        {
          sendername: parcel.senderName,
          from: parcel.from,
          to: parcel.to,
          recipientname: parcel.recipientName,
          cost: parcel.cost,
          weight: parcel.weight,
          note: parcel.note,
        },
        async (err, template) => {
          if (!err && template) {
            const messageOptions = {
              from: process.env.EMAIL,
              to: `${parcel.senderEmail}, ${parcel.recipientEmail}`,
              subject: "Your parcel has been delivered.",
              html: template,
            };

            try {
              sendMail(messageOptions);

              await ParcelModel.findByIdAndUpdate(
                { _id: parcel._id },
                { status: 3 }
              );
            } catch (error) {
              console.error(error);
            }
          } else {
            console.error(err);
          }
        }
      );
    });
  } else {
    console.log("No new delivered parcels found");
  }
};

export default deliveredParcelsScheduler;