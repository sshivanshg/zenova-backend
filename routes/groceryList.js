const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const groceryListController = require('../controllers/groceryListController');

router.post('/', auth, groceryListController.createGroceryList);
router.get('/', auth, groceryListController.getGroceryLists);
router.get('/:id', auth, groceryListController.getGroceryList);
router.put('/:id', auth, groceryListController.updateGroceryList);
router.delete('/:id', auth, groceryListController.deleteGroceryList);

module.exports = router; 