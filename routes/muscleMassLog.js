const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const muscleMassLogController = require('../controllers/muscleMassLogController');

router.post('/', auth, muscleMassLogController.createMuscleMassLog);
router.get('/', auth, muscleMassLogController.getMuscleMassLogs);
router.get('/:id', auth, muscleMassLogController.getMuscleMassLog);
router.put('/:id', auth, muscleMassLogController.updateMuscleMassLog);
router.delete('/:id', auth, muscleMassLogController.deleteMuscleMassLog);

module.exports = router; 