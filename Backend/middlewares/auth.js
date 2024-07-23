import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();

export const verifyToken = (req, res, next) => {
  const secret = process.env.JWT_SEC;
  try {
    const token = req.headers.authorization;
    let decoded;

    if (!token) 
      return res.status(401).json({ message: "Unauthenticated" });

    decoded = jwt.verify(token.split(" ")[1], secret);

    req.userId = decoded?.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const verifyTokenAndRole = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "You don't have access" });

    next();
  });
};
