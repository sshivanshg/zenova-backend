const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const bodyFatLogController = require('../controllers/bodyFatLogController');

router.post('/', auth, bodyFatLogController.createBodyFatLog);
router.get('/', auth, bodyFatLogController.getBodyFatLogs);
router.get('/:id', auth, bodyFatLogController.getBodyFatLog);
router.put('/:id', auth, bodyFatLogController.updateBodyFatLog);
router.delete('/:id', auth, bodyFatLogController.deleteBodyFatLog);

module.exports = router; 