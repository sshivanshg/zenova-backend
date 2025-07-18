const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const maidTaskLogController = require('../controllers/maidTaskLogController');

router.post('/', auth, maidTaskLogController.createMaidTaskLog);
router.get('/', auth, maidTaskLogController.getMaidTaskLogs);
router.get('/:id', auth, maidTaskLogController.getMaidTaskLog);
router.put('/:id', auth, maidTaskLogController.updateMaidTaskLog);
router.delete('/:id', auth, maidTaskLogController.deleteMaidTaskLog);

module.exports = router; 