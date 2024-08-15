import express from "express";
import { deleteUser, fetchAllUsers, fetchUser } from "../controllers/user.js";
import { verifyTokenAndRole } from "../middlewares/auth.js";

const router = express.Router();

// get single user
router.get("/:id", verifyTokenAndRole, fetchUser);

// get all users
router.get("/", fetchAllUsers);

// delete user
router.delete("/:id", verifyTokenAndRole, deleteUser);

export default router;
