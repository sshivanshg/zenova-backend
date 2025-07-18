const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const fastingLogController = require('../controllers/fastingLogController');

router.post('/', auth, fastingLogController.createFastingLog);
router.get('/', auth, fastingLogController.getFastingLogs);
router.get('/:id', auth, fastingLogController.getFastingLog);
router.put('/:id', auth, fastingLogController.updateFastingLog);
router.delete('/:id', auth, fastingLogController.deleteFastingLog);

module.exports = router; 