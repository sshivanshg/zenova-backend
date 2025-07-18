const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const caffeineLogController = require('../controllers/caffeineLogController');

router.post('/', auth, caffeineLogController.createCaffeineLog);
router.get('/', auth, caffeineLogController.getCaffeineLogs);
router.get('/:id', auth, caffeineLogController.getCaffeineLog);
router.put('/:id', auth, caffeineLogController.updateCaffeineLog);
router.delete('/:id', auth, caffeineLogController.deleteCaffeineLog);

module.exports = router; 