const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const measurementLogController = require('../controllers/measurementLogController');

router.post('/', auth, measurementLogController.createMeasurementLog);
router.get('/', auth, measurementLogController.getMeasurementLogs);
router.get('/:id', auth, measurementLogController.getMeasurementLog);
router.put('/:id', auth, measurementLogController.updateMeasurementLog);
router.delete('/:id', auth, measurementLogController.deleteMeasurementLog);

module.exports = router; 