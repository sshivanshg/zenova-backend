const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const medicineLogController = require('../controllers/medicineLogController');

router.post('/', auth, medicineLogController.createLog);
router.get('/', auth, medicineLogController.getLogs);
router.put('/:id', auth, medicineLogController.updateLog);
router.delete('/:id', auth, medicineLogController.deleteLog);

module.exports = router; 