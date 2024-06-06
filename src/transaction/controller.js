// transactions/controller.js

const { pool } = require('../db');
const { insertReserveBook, insertReserveDetail } = require('./queries');

const createTransaction = async (req, res) => {
  const { customerID, reserveDate, books } = req.body;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Insert into ReserveBook table
    const reserveBookResult = await client.query(insertReserveBook, [customerID, reserveDate]);

    const reserveID = reserveBookResult.rows[0].reserveid;

    // Insert into ReserveDetail table
    for (const book of books) {
      const { bookID, quantity, price } = book;
      await client.query(insertReserveDetail, [reserveID, bookID, quantity, price]);
    }

    await client.query('COMMIT');
    res.status(201).json({ message: 'Transaction created successfully' });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
};

module.exports = {
  createTransaction
};
