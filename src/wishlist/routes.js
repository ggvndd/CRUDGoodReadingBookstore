const { Router } = require('express');
const { getWishlist, getWishlistById, addWishlist, updateWishlist, deleteWishlist } = require('./controller');

const router = Router();

router.get('/', getWishlist);
router.get('/:id', getWishlistById);
router.post('/', addWishlist);
router.put('/:id', updateWishlist);
router.delete('/:id', deleteWishlist);

module.exports = router;
