const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const mealController = require('../controllers/mealController');

// MealPlan CRUD
router.post('/plan', auth, mealController.createMealPlan);
router.get('/plan', auth, mealController.getMealPlans);
router.put('/plan/:id', auth, mealController.updateMealPlan);
router.delete('/plan/:id', auth, mealController.deleteMealPlan);

// Nutrition log
router.post('/nutrition', auth, mealController.logNutrition);
router.get('/nutrition', auth, mealController.getNutritionLogs);
router.get('/nutrition/summary', auth, mealController.getNutritionSummary);

module.exports = router; 