const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const meditationLogController = require('../controllers/meditationLogController');

router.post('/', auth, meditationLogController.createMeditationLog);
router.get('/', auth, meditationLogController.getMeditationLogs);
router.get('/:id', auth, meditationLogController.getMeditationLog);
router.put('/:id', auth, meditationLogController.updateMeditationLog);
router.delete('/:id', auth, meditationLogController.deleteMeditationLog);

module.exports = router; 