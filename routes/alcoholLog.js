const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const alcoholLogController = require('../controllers/alcoholLogController');

router.post('/', auth, alcoholLogController.createAlcoholLog);
router.get('/', auth, alcoholLogController.getAlcoholLogs);
router.get('/:id', auth, alcoholLogController.getAlcoholLog);
router.put('/:id', auth, alcoholLogController.updateAlcoholLog);
router.delete('/:id', auth, alcoholLogController.deleteAlcoholLog);

module.exports = router; 