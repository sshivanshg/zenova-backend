const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const trackerController = require('../controllers/trackerController');

// Hydration, Steps, Sleep
router.post('/log', auth, trackerController.logTracker);
router.get('/log', auth, trackerController.getTracker);

// Meditation
router.post('/meditation', auth, trackerController.logMeditation);
router.get('/meditation', auth, trackerController.getMeditationLogs);

// Yoga
router.post('/yoga', auth, trackerController.logYoga);
router.get('/yoga', auth, trackerController.getYogaLogs);

// Muscle Mass
router.post('/muscle-mass', auth, trackerController.logMuscleMass);
router.get('/muscle-mass', auth, trackerController.getMuscleMassLogs);

// Body Fat
router.post('/body-fat', auth, trackerController.logBodyFat);
router.get('/body-fat', auth, trackerController.getBodyFatLogs);

// Measurement
router.post('/measurement', auth, trackerController.logMeasurement);
router.get('/measurement', auth, trackerController.getMeasurementLogs);

// BMR
router.post('/bmr', auth, trackerController.logBMR);
router.get('/bmr', auth, trackerController.getBMRLogs);

// Cardio
router.post('/cardio', auth, trackerController.logCardio);
router.get('/cardio', auth, trackerController.getCardioLogs);

// Metabolic Age
router.post('/metabolic-age', auth, trackerController.logMetabolicAge);
router.get('/metabolic-age', auth, trackerController.getMetabolicAgeLogs);

// Focus & Screen Time
router.post('/focus', auth, trackerController.logFocus);
router.get('/focus', auth, trackerController.getFocusLogs);

module.exports = router; 