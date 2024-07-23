import express from "express";
import { register, authenticate } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/signin", authenticate);

export default router;
