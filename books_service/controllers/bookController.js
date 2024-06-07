import { asyncHandler } from "../middleware/asyncHandler.js";
import { Book } from "../model/Book.js";

// Get all Books
export const allBooks = asyncHandler(async (req, res, next) => {
  const books = await Book.find();

  if (books.length === 0)
    return res.status(404).send({ message: "No books found" });
  res.status(200).send({ message: "all books", data: books });
});

//  Get Single Book
export const singleBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findOne({ _id: req.params.bookId });
  if (!book)
    return res
      .status(404)
      .send({ message: "No Book Found With given information" });

  res.status(200).send({ message: "Single book", data: book });
});

// Create a new book
export const createBook = asyncHandler(async (req, res, next) => {
  const newBook = await Book.create(req.body);
  res.status(200).send({ message: "Book created Successfully", data: newBook });
});

// Update a Book
export const updateBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findOneAndUpdate(
    { _id: req.params.bookId },
    req.body,
    { new: true }
  );

  if (!book)
    return res
      .status(404)
      .send({ message: "Book not found with the given information" });
  res.status(200).send({ message: "Book updated successfully", data: book });
});

// Delete a Book
export const deleteBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findOneAndDelete({ _id: req.params.bookId });
  if (!book)
    return res
      .status(404)
      .send({ message: "No Book Found With given information" });
  res.status(200).send({ message: "Book Deleted Succesfully" });
});
