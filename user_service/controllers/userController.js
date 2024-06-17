import { asyncHandler } from "../middleware/asyncHandler.js";
import { User } from "../model/User.js";

// Get all Users
export const allUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();
    return res.status(200).json({ message: "All users", data: users });
});

//  Get User Profile
export const profile = asyncHandler(async (req, res, next) => {
  const profile = await User.findOne({ _id: req.userId });
  return res.status(200).json({ message: "User profile", data: profile });
});


//  Get Single User
export const singleUser = asyncHandler(async (req, res, next) => {
  const singleUser = await User.findOne({ _id: req.params.userId });
  return res.status(200).json({ message: "User profile", data: singleUser });
});

// Update a User
export const updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ id: req.userId });
    if(!user) return res.status(404).json({ message:"User not found"});
    const updateUser = await User.findOneAndUpdate({ id: req.userId},req.body,{new: true});
    if (!updateUser) return res.status(400).json({ message:"Something went wrong"});
    res.status(201).json({ message:"User updated successfully"});
});

// Delete a User
export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOneAndDelete({ id: req.userId });
  if(!user) return res.status(404).json({ message:"User not found"});
  const updateUser = await User.findOneAndUpdate({ id: req.userId},req.body,{new: true});
  if (!updateUser) return res.status(400).json({ message:"Something went wrong"});
  res.status(201).json({ message:"User updated successfully"});
});


