const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const routineController = require('../controllers/routineController');

// Routine
router.post('/routine', auth, routineController.logRoutine);
router.get('/routine', auth, routineController.getRoutine);

// Maid Task
router.post('/maid-task', auth, routineController.logMaidTask);
router.get('/maid-task', auth, routineController.getMaidTask);

// Supplement
router.post('/supplement', auth, routineController.logSupplement);
router.get('/supplement', auth, routineController.getSupplementLogs);

// Cigarette
router.post('/cigarette', auth, routineController.logCigarette);
router.get('/cigarette', auth, routineController.getCigaretteLogs);

// Alcohol
router.post('/alcohol', auth, routineController.logAlcohol);
router.get('/alcohol', auth, routineController.getAlcoholLogs);

// Caffeine
router.post('/caffeine', auth, routineController.logCaffeine);
router.get('/caffeine', auth, routineController.getCaffeineLogs);

// Fasting
router.post('/fasting', auth, routineController.logFasting);
router.get('/fasting', auth, routineController.getFastingLogs);

// Gut Health
router.post('/gut-health', auth, routineController.logGutHealth);
router.get('/gut-health', auth, routineController.getGutHealthLogs);

// Quest
router.post('/quest', auth, routineController.createQuest);
router.get('/quest', auth, routineController.getQuests);
router.put('/quest/:id', auth, routineController.updateQuest);
router.delete('/quest/:id', auth, routineController.deleteQuest);

module.exports = router; 