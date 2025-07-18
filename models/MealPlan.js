const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  type: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snack'], required: true },
  items: [{ name: String, calories: Number, macros: { protein: Number, carbs: Number, fat: Number } }],
  totalCalories: { type: Number, default: 0 },
  macros: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
  },
});

const mealPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  meals: [mealSchema],
  totalCalories: { type: Number, default: 0 },
  macros: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
  },
  type: { type: String, enum: ['daily', 'weekly'], default: 'daily' },
}, { timestamps: true });

module.exports = mongoose.model('MealPlan', mealPlanSchema); 