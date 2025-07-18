const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cardioLogController = require('../controllers/cardioLogController');

router.post('/', auth, cardioLogController.createCardioLog);
router.get('/', auth, cardioLogController.getCardioLogs);
router.get('/:id', auth, cardioLogController.getCardioLog);
router.put('/:id', auth, cardioLogController.updateCardioLog);
router.delete('/:id', auth, cardioLogController.deleteCardioLog);

module.exports = router; 