const mongoose = require('mongoose');

const groceryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  description: { type: String },
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
  },
}, { timestamps: true });

module.exports = mongoose.model('GroceryItem', groceryItemSchema); 