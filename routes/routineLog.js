const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const routineLogController = require('../controllers/routineLogController');

router.post('/', auth, routineLogController.createRoutineLog);
router.get('/', auth, routineLogController.getRoutineLogs);
router.get('/:id', auth, routineLogController.getRoutineLog);
router.put('/:id', auth, routineLogController.updateRoutineLog);
router.delete('/:id', auth, routineLogController.deleteRoutineLog);

module.exports = router; 