const mongoose = require('mongoose');

const groceryListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'GroceryItem' },
    quantity: { type: Number, default: 1 },
  }],
  status: { type: String, enum: ['pending', 'purchased'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('GroceryList', groceryListSchema); 