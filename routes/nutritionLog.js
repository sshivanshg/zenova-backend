const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const nutritionLogController = require('../controllers/nutritionLogController');

router.post('/', auth, nutritionLogController.createNutritionLog);
router.get('/', auth, nutritionLogController.getNutritionLogs);
router.get('/:id', auth, nutritionLogController.getNutritionLog);
router.put('/:id', auth, nutritionLogController.updateNutritionLog);
router.delete('/:id', auth, nutritionLogController.deleteNutritionLog);

module.exports = router; 