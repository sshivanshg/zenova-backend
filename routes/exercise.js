const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const exerciseController = require('../controllers/exerciseController');

router.post('/', auth, exerciseController.createExercise);
router.get('/', auth, exerciseController.getExercises);
router.get('/:id', auth, exerciseController.getExercise);
router.put('/:id', auth, exerciseController.updateExercise);
router.delete('/:id', auth, exerciseController.deleteExercise);

module.exports = router; 