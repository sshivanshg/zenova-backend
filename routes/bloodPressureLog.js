const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const bloodPressureLogController = require('../controllers/bloodPressureLogController');

router.post('/', auth, bloodPressureLogController.createLog);
router.get('/', auth, bloodPressureLogController.getLogs);
router.put('/:id', auth, bloodPressureLogController.updateLog);
router.delete('/:id', auth, bloodPressureLogController.deleteLog);

module.exports = router; 