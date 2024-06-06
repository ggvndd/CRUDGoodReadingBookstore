const { query } = require('../db');
const { getWishlistQuery, getWishlistByIdQuery, addWishlistQuery, updateWishlistQuery, deleteWishlistQuery } = require('./queries');

const getWishlist = async (req, res) => {
  try {
    const result = await query(getWishlistQuery);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWishlistById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(getWishlistByIdQuery, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Wishlist item not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addWishlist = async (req, res) => {
  const { customerID, bookID, addedDate } = req.body;
  try {
    const result = await query(addWishlistQuery, [customerID, bookID, addedDate]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWishlist = async (req, res) => {
  const { id } = req.params;
  const { customerID, bookID, addedDate } = req.body;
  try {
    const result = await query(updateWishlistQuery, [customerID, bookID, addedDate, id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Wishlist item not found' });
    }
    res.status(200).json({ message: 'Wishlist item updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(deleteWishlistQuery, [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Wishlist item not found' });
    }
    res.status(200).json({ message: 'Wishlist item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getWishlist, getWishlistById, addWishlist, updateWishlist, deleteWishlist };
