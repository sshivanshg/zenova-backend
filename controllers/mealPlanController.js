const MealPlan = require('../models/MealPlan');

exports.createMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.create(req.body);
    res.status(201).json(mealPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find();
    res.json(mealPlans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id);
    res.json(mealPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(mealPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteMealPlan = async (req, res) => {
  try {
    await MealPlan.findByIdAndDelete(req.params.id);
    res.json({ message: 'MealPlan deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 