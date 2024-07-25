import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    country: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Number, default: 0 },
    role: { type: String, default: "user" },
    createdAt: {type: Date, default: new Date().toISOString()}
  },
  {
    timestamp: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;