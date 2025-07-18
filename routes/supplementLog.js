const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const supplementLogController = require('../controllers/supplementLogController');

router.post('/', auth, supplementLogController.createSupplementLog);
router.get('/', auth, supplementLogController.getSupplementLogs);
router.get('/:id', auth, supplementLogController.getSupplementLog);
router.put('/:id', auth, supplementLogController.updateSupplementLog);
router.delete('/:id', auth, supplementLogController.deleteSupplementLog);

module.exports = router; 