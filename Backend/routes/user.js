import express from "express";
import { deleteUser, fetchAllUsers, fetchUser } from "../controllers/user.js";
import { verifyTokenAndRole } from "../middlewares/auth.js";

const router = express.Router();

router.get("/:id", fetchUser);
router.get("/", verifyTokenAndRole, fetchAllUsers);
router.delete("/:id", deleteUser);

export default router;
