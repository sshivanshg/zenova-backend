const GroceryItem = require('../models/GroceryItem');
const GroceryList = require('../models/GroceryList');
const GroceryCart = require('../models/GroceryCart');

// Grocery Item CRUD
exports.createItem = async (req, res) => {
  try {
    const item = await GroceryItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getItems = async (req, res) => {
  try {
    const items = await GroceryItem.find();
    res.json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateItem = async (req, res) => {
  try {
    const item = await GroceryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteItem = async (req, res) => {
  try {
    await GroceryItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Grocery List CRUD
exports.getList = async (req, res) => {
  try {
    const list = await GroceryList.findOne({ user: req.user.id }).populate('items.item');
    res.json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.addToList = async (req, res) => {
  try {
    let list = await GroceryList.findOne({ user: req.user.id });
    if (!list) list = await GroceryList.create({ user: req.user.id, items: [] });
    list.items.push(req.body);
    await list.save();
    res.json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.removeFromList = async (req, res) => {
  try {
    const list = await GroceryList.findOne({ user: req.user.id });
    if (!list) return res.status(404).json({ message: 'List not found' });
    list.items = list.items.filter(i => i.item.toString() !== req.params.itemId);
    await list.save();
    res.json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Grocery Cart CRUD
exports.getCart = async (req, res) => {
  try {
    const cart = await GroceryCart.findOne({ user: req.user.id }).populate('items.item');
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.addToCart = async (req, res) => {
  try {
    let cart = await GroceryCart.findOne({ user: req.user.id });
    if (!cart) cart = await GroceryCart.create({ user: req.user.id, items: [] });
    cart.items.push(req.body);
    cart.totalPrice += req.body.price * req.body.quantity;
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.removeFromCart = async (req, res) => {
  try {
    const cart = await GroceryCart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    cart.items = cart.items.filter(i => i.item.toString() !== req.params.itemId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.checkout = async (req, res) => {
  try {
    const cart = await GroceryCart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    cart.status = 'checkedout';
    await cart.save();
    res.json({ message: 'Checkout successful', cart });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 