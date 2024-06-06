const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./book/routes');
const wishlistRoutes = require('./wishlist/routes');
const transactionRoutes = require('./transaction/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test database connection route
app.get('/test-db', (req, res) => {
  pool.query('SELECT 1 + 1 AS result', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ data: results.rows });
  });
});

// Routes
app.use('/books', bookRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/transactions', transactionRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Good Reading Online Bookstore API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
