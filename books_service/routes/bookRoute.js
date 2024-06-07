import express from 'express';
import { allBooks, createBook, deleteBook, singleBook, updateBook } from '../controllers/bookController.js';

const bookRoute = express.Router();

bookRoute.get('/',allBooks)
bookRoute.get('/:bookId',singleBook)
bookRoute.post('/create/',createBook)
bookRoute.put('/update/:bookId',updateBook)
bookRoute.delete('/delete/:bookId',deleteBook)

export default bookRoute