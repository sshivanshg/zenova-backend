const GroceryItem = require('../models/GroceryItem');

exports.createGroceryItem = async (req, res) => {
  try {
    const groceryItem = await GroceryItem.create(req.body);
    res.status(201).json(groceryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGroceryItems = async (req, res) => {
  try {
    const groceryItems = await GroceryItem.find();
    res.json(groceryItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGroceryItem = async (req, res) => {
  try {
    const groceryItem = await GroceryItem.findById(req.params.id);
    res.json(groceryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateGroceryItem = async (req, res) => {
  try {
    const groceryItem = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(groceryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteGroceryItem = async (req, res) => {
  try {
    await GroceryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'GroceryItem deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 