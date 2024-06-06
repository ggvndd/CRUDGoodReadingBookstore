const getWishlistQuery = 'SELECT * FROM Wishlist';
const getWishlistByIdQuery = 'SELECT * FROM Wishlist WHERE WishlistID = $1';
const addWishlistQuery = 'INSERT INTO Wishlist (CustomerID, BookID, AddedDate) VALUES ($1, $2, $3) RETURNING *';
const updateWishlistQuery = 'UPDATE Wishlist SET CustomerID = $1, BookID = $2, AddedDate = $3 WHERE WishlistID = $4';
const deleteWishlistQuery = 'DELETE FROM Wishlist WHERE WishlistID = $1';

module.exports = { getWishlistQuery, getWishlistByIdQuery, addWishlistQuery, updateWishlistQuery, deleteWishlistQuery };
