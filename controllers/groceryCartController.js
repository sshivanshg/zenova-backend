const GroceryCart = require('../models/GroceryCart');

exports.createGroceryCart = async (req, res) => {
  try {
    const groceryCart = await GroceryCart.create(req.body);
    res.status(201).json(groceryCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGroceryCarts = async (req, res) => {
  try {
    const groceryCarts = await GroceryCart.find();
    res.json(groceryCarts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGroceryCart = async (req, res) => {
  try {
    const groceryCart = await GroceryCart.findById(req.params.id);
    res.json(groceryCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateGroceryCart = async (req, res) => {
  try {
    const groceryCart = await GroceryCart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(groceryCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteGroceryCart = async (req, res) => {
  try {
    await GroceryCart.findByIdAndDelete(req.params.id);
    res.json({ message: 'GroceryCart deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 