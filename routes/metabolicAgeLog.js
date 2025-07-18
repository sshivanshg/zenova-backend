const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const metabolicAgeLogController = require('../controllers/metabolicAgeLogController');

router.post('/', auth, metabolicAgeLogController.createMetabolicAgeLog);
router.get('/', auth, metabolicAgeLogController.getMetabolicAgeLogs);
router.get('/:id', auth, metabolicAgeLogController.getMetabolicAgeLog);
router.put('/:id', auth, metabolicAgeLogController.updateMetabolicAgeLog);
router.delete('/:id', auth, metabolicAgeLogController.deleteMetabolicAgeLog);

module.exports = router; 