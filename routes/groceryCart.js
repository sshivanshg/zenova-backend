const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const groceryCartController = require('../controllers/groceryCartController');

router.post('/', auth, groceryCartController.createGroceryCart);
router.get('/', auth, groceryCartController.getGroceryCarts);
router.get('/:id', auth, groceryCartController.getGroceryCart);
router.put('/:id', auth, groceryCartController.updateGroceryCart);
router.delete('/:id', auth, groceryCartController.deleteGroceryCart);

module.exports = router; 