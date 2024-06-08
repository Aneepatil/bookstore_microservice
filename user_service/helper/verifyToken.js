// verifyToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (token) => {
  try {
    const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    return verifiedToken;
  } catch (error) {
    throw new Error(error.message);
  }
};
