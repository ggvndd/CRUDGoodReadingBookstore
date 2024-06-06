const getAllBooksQuery = 'SELECT * FROM Book';
const getBookByIdQuery = 'SELECT * FROM Book WHERE BookID = $1';
const addBookQuery = `
  INSERT INTO Book (Title, PublicationYear, Pages, PublisherID)
  VALUES ($1, $2, $3, $4)
  RETURNING *`;
const updateBookQuery = 'UPDATE Book SET Title = $1, PublicationYear = $2, Pages = $3, PublisherID = $4 WHERE BookID = $5';
const deleteBookQuery = 'DELETE FROM Book WHERE BookID = $1';
const searchBooksByAuthor = `
  SELECT b.*
  FROM Book b
  JOIN Book_Author ba ON b.BookID = ba.BookID
  JOIN Author a ON ba.AuthorID = a.AuthorID
  WHERE a.AuthorName ILIKE $1
`;
const searchBooksByKeyword = 'SELECT * FROM Book WHERE Title ILIKE $1';

module.exports = {
  getAllBooksQuery, 
  getBookByIdQuery, 
  addBookQuery, 
  updateBookQuery, 
  deleteBookQuery,
  searchBooksByAuthor,
  searchBooksByKeyword,
};
