const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const bmrLogController = require('../controllers/bmrLogController');

router.post('/', auth, bmrLogController.createBMRLog);
router.get('/', auth, bmrLogController.getBMRLogs);
router.get('/:id', auth, bmrLogController.getBMRLog);
router.put('/:id', auth, bmrLogController.updateBMRLog);
router.delete('/:id', auth, bmrLogController.deleteBMRLog);

module.exports = router; 