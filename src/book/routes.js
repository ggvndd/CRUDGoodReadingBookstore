const { Router } = require('express');
const controller = require('./controller');

const router = Router();
const { getBooks, 
    getBookById, 
    addBook, 
    updateBook, 
    deleteBook } = require('./controller');
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/search/author', controller.searchBooksByAuthor);
router.get('/search/keyword', controller.searchBooksByKeyword);

module.exports = router;


