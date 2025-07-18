const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const menstrualCycleLogController = require('../controllers/menstrualCycleLogController');

router.post('/', auth, menstrualCycleLogController.createLog);
router.get('/', auth, menstrualCycleLogController.getLogs);
router.put('/:id', auth, menstrualCycleLogController.updateLog);
router.delete('/:id', auth, menstrualCycleLogController.deleteLog);

module.exports = router; 