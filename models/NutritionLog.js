const mongoose = require('mongoose');

const nutritionLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  meals: [{
    type: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snack'] },
    items: [{ name: String, calories: Number, macros: { protein: Number, carbs: Number, fat: Number } }],
    totalCalories: { type: Number, default: 0 },
    macros: {
      protein: { type: Number, default: 0 },
      carbs: { type: Number, default: 0 },
      fat: { type: Number, default: 0 },
    },
  }],
  totalCalories: { type: Number, default: 0 },
  macros: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
  },
}, { timestamps: true });

module.exports = mongoose.model('NutritionLog', nutritionLogSchema); 