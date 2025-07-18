const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const gutHealthLogController = require('../controllers/gutHealthLogController');

router.post('/', auth, gutHealthLogController.createGutHealthLog);
router.get('/', auth, gutHealthLogController.getGutHealthLogs);
router.get('/:id', auth, gutHealthLogController.getGutHealthLog);
router.put('/:id', auth, gutHealthLogController.updateGutHealthLog);
router.delete('/:id', auth, gutHealthLogController.deleteGutHealthLog);

module.exports = router; 