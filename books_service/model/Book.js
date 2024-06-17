import mongoose,{ Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    auther: {
      type: "string",
      required: true,
    },
    numberOfPages: {
      type: "string",
      required: true,
    },
    publisher: {
      type: "string",
      required: true,
    },
    createdBy: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

export const Book = model("Book", bookSchema);
