const MealPlan = require('../models/MealPlan');
const NutritionLog = require('../models/NutritionLog');

exports.createMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.create({ ...req.body, user: req.user.id });
    res.status(201).json(mealPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find({ user: req.user.id });
    res.json(mealPlans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
    res.json(mealPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMealPlan = async (req, res) => {
  try {
    await MealPlan.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Meal plan deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.logNutrition = async (req, res) => {
  try {
    const log = await NutritionLog.create({ ...req.body, user: req.user.id });
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNutritionLogs = async (req, res) => {
  try {
    const logs = await NutritionLog.find({ user: req.user.id });
    res.json(logs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNutritionSummary = async (req, res) => {
  try {
    const logs = await NutritionLog.find({ user: req.user.id });
    // Example summary: total calories for the week
    const totalCalories = logs.reduce((sum, log) => sum + (log.totalCalories || 0), 0);
    res.json({ totalCalories });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 