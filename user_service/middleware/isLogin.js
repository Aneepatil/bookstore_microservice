// isLogin.js
import { getTokenFromHeaders } from "../helper/getTokenFromHeader.js";
import { verifyToken } from "../helper/verifyToken.js";
import { asyncHandler } from "./asyncHandler.js";

export const isLogin = asyncHandler(async (req, res, next) => {
  try {
    const token = await getTokenFromHeaders(req);
    if (!token)
      return res.status(400).json({ message: "Please provide a token" });

    const decodedData = await verifyToken(token);
    if (!decodedData) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.userId = decodedData.id;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Invalid or expired token", error: error.message });
  }
});
