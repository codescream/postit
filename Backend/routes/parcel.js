import express from "express";
import {
  addParcel,
  deleteParcel,
  fetchAllParcels,
  fetchParcel,
  updateParcel,
  userParcels,
} from "../controllers/parcel.js";
import { verifyToken, verifyTokenAndRole } from "../middlewares/auth.js";

const router = express.Router();

// add parcel
router.post("/", verifyTokenAndRole, addParcel);

// get all parcels
router.get("/", verifyTokenAndRole, fetchAllParcels);

// get a parcel
router.get("/:id", fetchParcel);

// get single user parcels
router.get("/user/:id", verifyToken, userParcels);

// update parcel
router.patch("/:id", verifyTokenAndRole, updateParcel);

// delete parcel
router.delete("/:id", verifyTokenAndRole, deleteParcel);

export default router;
