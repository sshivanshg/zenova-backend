const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const heartRateLogController = require('../controllers/heartRateLogController');

router.post('/', auth, heartRateLogController.createLog);
router.get('/', auth, heartRateLogController.getLogs);
router.put('/:id', auth, heartRateLogController.updateLog);
router.delete('/:id', auth, heartRateLogController.deleteLog);

module.exports = router; 