const { query } = require('../db');
const {
  getAllBooksQuery,
  getBookByIdQuery,
  addBookQuery,
  updateBookQuery,
  deleteBookQuery,

} = require('./queries');

const getBooks = async (req, res) => {
  try {
    const result = await query(getAllBooksQuery);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(getBookByIdQuery, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addBook = async (req, res) => {
  const { title, publicationYear, pages, publisherID } = req.body;
  try {
    const result = await query(addBookQuery, [title, publicationYear, pages, publisherID]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, publicationYear, pages, publisherID } = req.body;
  try {
    const result = await query(updateBookQuery, [title, publicationYear, pages, publisherID, id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(deleteBookQuery, [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const searchBooksByAuthor = async (req, res) => {
  const { author } = req.query;
  try {
    const results = await query(queries.searchBooksByAuthor, [`%${author}%`]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchBooksByKeyword = async (req, res) => {
  const { keyword } = req.query;
  try {
    const results = await query(queries.searchBooksByKeyword, [`%${keyword}%`]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  searchBooksByAuthor,
  searchBooksByKeyword,
};
