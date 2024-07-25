import Parcel from '../models/Parcel.js';
import cron from "node-cron";
import ejs from "ejs";
import { configDotenv } from 'dotenv';
import sendMail from '../helpers/sendmail.js';

configDotenv();

const pendingParcelsScheduler = () => {
  cron.schedule("* * * * *", () => {
    console.log("searching for new parcels...");
    pendingParcels();
  })
}

const pendingParcels = async () => {
  const parcels = await Parcel.find({ status: 0 });

  if(parcels.length) {
    parcels.forEach((parcel) => {
      ejs.renderFile("templates/pendingparcel.ejs", {
        sendername: parcel.senderName,
        from: parcel.from,
        to: parcel.to,
        recipientname: parcel.recipientName,
        cost: parcel.cost,
        weight: parcel.weight,
        note: parcel.note
      }, async (err, template) => {
        if(!err && template) {
          const messageOptions = {
            from: process.env.EMAIL,
            to: `${parcel.senderEmail}, ${parcel.recipientEmail}`,
            subject: "Pending Parcel",
            html: template
          };

          try {
            sendMail(messageOptions);

            const updateParcel = await Parcel.findByIdAndUpdate({ _id: parcel._id }, { status: 1 });
          } catch (error) {
            console.error(error); 
          }
        }else {
          console.error(err);
        }
      })
    })
  }else {
    console.log("No new parcels found");
  }
}

export default pendingParcelsScheduler;