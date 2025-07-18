const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const groceryItemController = require('../controllers/groceryItemController');

router.post('/', auth, groceryItemController.createGroceryItem);
router.get('/', auth, groceryItemController.getGroceryItems);
router.get('/:id', auth, groceryItemController.getGroceryItem);
router.put('/:id', auth, groceryItemController.updateGroceryItem);
router.delete('/:id', auth, groceryItemController.deleteGroceryItem);

module.exports = router; 