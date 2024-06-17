import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const validateUser = async (req, res, next) => {
  try {
    // Get token from headers
    const token = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    // Decoding the user data from token
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // Setting the decoded user id to the request body
    req.userId = decodedUser.id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Authorization token is invalid or expired",
    });
  }
};
