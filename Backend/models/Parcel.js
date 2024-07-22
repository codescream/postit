import mongoose from "mongoose";

const parcelSchema = mongoose.Schema(
  {
    senderID: { type: Number, required: true},
    from: { type: String, required: true },
    to: { type: String, required: true },
    senderName: { type: String, required: true },
    recipientName: { type: String, required: true },
    senderemail: { type: String, required: true },
    recipientEmail: { type: String, required: true },
    weigth: { type: Number, required: true },
    cost: { type: Number, required: true },
    date: { type: String, required: true },
    note: { type: String },
    feedback: { type: String },
    status: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date().toISOString()}
  },
  {
    timestamp: true,
  }
);

const ParcelModel = mongoose.model("Parcel", parcelSchema);

export default ParcelModel;
