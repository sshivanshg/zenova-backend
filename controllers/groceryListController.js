const GroceryList = require('../models/GroceryList');

exports.createGroceryList = async (req, res) => {
  try {
    const groceryList = await GroceryList.create(req.body);
    res.status(201).json(groceryList);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGroceryLists = async (req, res) => {
  try {
    const groceryLists = await GroceryList.find();
    res.json(groceryLists);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGroceryList = async (req, res) => {
  try {
    const groceryList = await GroceryList.findById(req.params.id);
    res.json(groceryList);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateGroceryList = async (req, res) => {
  try {
    const groceryList = await GroceryList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(groceryList);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteGroceryList = async (req, res) => {
  try {
    await GroceryList.findByIdAndDelete(req.params.id);
    res.json({ message: 'GroceryList deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 