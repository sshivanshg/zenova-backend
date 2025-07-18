const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const weightLogController = require('../controllers/weightLogController');

router.post('/', auth, weightLogController.createLog);
router.get('/', auth, weightLogController.getLogs);
router.put('/:id', auth, weightLogController.updateLog);
router.delete('/:id', auth, weightLogController.deleteLog);

module.exports = router; 