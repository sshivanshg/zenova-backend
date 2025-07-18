const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const mealPlanController = require('../controllers/mealPlanController');

router.post('/', auth, mealPlanController.createMealPlan);
router.get('/', auth, mealPlanController.getMealPlans);
router.get('/:id', auth, mealPlanController.getMealPlan);
router.put('/:id', auth, mealPlanController.updateMealPlan);
router.delete('/:id', auth, mealPlanController.deleteMealPlan);

module.exports = router; 