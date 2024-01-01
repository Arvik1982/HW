const routerBooks = require('express').Router()
// const loggerTwo=require('../middleware/loggerTwo')
const {getBooks,getBook, createBook,updateBook,deleteBook}= require('../controllers/books.js')

// router.use(loggerTwo)

routerBooks.get('/books/',getBooks);
routerBooks.get('/books/:book_id',getBook);
routerBooks.post('/books/',createBook);
routerBooks.patch('/books/:book_id',updateBook);
routerBooks.delete('/books/:book_id',deleteBook);



module.exports=routerBooks