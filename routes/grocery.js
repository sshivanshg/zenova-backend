const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const groceryController = require('../controllers/groceryController');

// Grocery Item CRUD
router.post('/item', auth, groceryController.createItem);
router.get('/item', auth, groceryController.getItems);
router.put('/item/:id', auth, groceryController.updateItem);
router.delete('/item/:id', auth, groceryController.deleteItem);

// Grocery List
router.get('/list', auth, groceryController.getList);
router.post('/list', auth, groceryController.addToList);
router.delete('/list/:itemId', auth, groceryController.removeFromList);

// Grocery Cart
router.get('/cart', auth, groceryController.getCart);
router.post('/cart', auth, groceryController.addToCart);
router.delete('/cart/:itemId', auth, groceryController.removeFromCart);
router.post('/cart/checkout', auth, groceryController.checkout);

module.exports = router; 