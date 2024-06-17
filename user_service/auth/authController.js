import { User } from "../model/User.js";
import { hashPassword } from "../helper/hashPassword.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { comparePassword } from "../helper/comparePassword.js";
import { generateToken } from "../helper/generateToken.js";

//console.log(token);ster User
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, age } = req.body;
  const isUserExist = await User.findOne({ email: req.body.email });

  if (isUserExist)
    return res.status(409).json({
      message: "Email already registered, Please login with credentials",
    });

  const newUser = await User.create({
    email,
    role,
    age,
    name,
    password: await hashPassword(password),
  });

  res
    .status(200)
    .json({ message: "User registered successfully", data: newUser });
});

// Login User
export const login = asyncHandler(async (req, res, next) => {

  const isUserExist = await User.findOne({ email: req.body.email });
  if (!isUserExist)
    return res.status(404).json({ message: "Invalid Credentials" });

  const isPasswordMatch = await comparePassword(
    req.body.password,
    isUserExist.password
  );

  if (!isPasswordMatch)
    return res.status(404).json({ message: "Invalid Credentials" });

  const { password, ...other } = isUserExist._doc;
  const token = await generateToken(isUserExist._id)
  return res
    .status(200)
    .json({
      message: "Login successful",
      user: { ...other, token },
    });
});
