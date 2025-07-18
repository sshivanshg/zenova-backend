const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const yogaLogController = require('../controllers/yogaLogController');

router.post('/', auth, yogaLogController.createYogaLog);
router.get('/', auth, yogaLogController.getYogaLogs);
router.get('/:id', auth, yogaLogController.getYogaLog);
router.put('/:id', auth, yogaLogController.updateYogaLog);
router.delete('/:id', auth, yogaLogController.deleteYogaLog);

module.exports = router; 