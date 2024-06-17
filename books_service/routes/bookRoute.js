import express from 'express';
import { allBooks, createBook, deleteBook, singleBook, updateBook } from '../controllers/bookController.js';
import { validateUser } from '../middleware/validateUser.js';

const bookRoute = express.Router();

bookRoute.get('/',allBooks)
bookRoute.get('/:bookId',singleBook)
bookRoute.post('/create/',validateUser,createBook)
bookRoute.put('/update/:bookId',updateBook)
bookRoute.delete('/delete/:bookId',deleteBook)

export default bookRoute