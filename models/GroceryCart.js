const mongoose = require('mongoose');

const groceryCartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'GroceryItem' },
    quantity: { type: Number, default: 1 },
  }],
  totalPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'checkedout'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('GroceryCart', groceryCartSchema); 