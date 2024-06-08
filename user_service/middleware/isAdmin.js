import { User } from "../model/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) return res.status(404).json({ message: "User not Found" });
    if (user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "Access Denied" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid or expired token", error: error.message });
  }
};
