const express = require('express');
const { createTransaction, getTransactions } = require('./controller');

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);


module.exports = router;
