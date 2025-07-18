const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const workoutController = require('../controllers/workoutController');

router.post('/', auth, workoutController.createWorkout);
router.get('/', auth, workoutController.getWorkouts);
router.get('/:id', auth, workoutController.getWorkout);
router.put('/:id', auth, workoutController.updateWorkout);
router.delete('/:id', auth, workoutController.deleteWorkout);

module.exports = router; 