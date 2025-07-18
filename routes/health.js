const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const healthController = require('../controllers/healthController');

// Weight
router.post('/weight', auth, healthController.logWeight);
router.get('/weight', auth, healthController.getWeightLogs);

// Heart Rate
router.post('/heart-rate', auth, healthController.logHeartRate);
router.get('/heart-rate', auth, healthController.getHeartRateLogs);

// Blood Pressure
router.post('/blood-pressure', auth, healthController.logBloodPressure);
router.get('/blood-pressure', auth, healthController.getBloodPressureLogs);

// Menstrual Cycle
router.post('/menstrual', auth, healthController.logMenstrualCycle);
router.get('/menstrual', auth, healthController.getMenstrualCycleLogs);

// Medicine
router.post('/medicine', auth, healthController.logMedicine);
router.get('/medicine', auth, healthController.getMedicineLogs);

module.exports = router; 