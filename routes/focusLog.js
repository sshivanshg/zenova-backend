const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const focusLogController = require('../controllers/focusLogController');

router.post('/', auth, focusLogController.createFocusLog);
router.get('/', auth, focusLogController.getFocusLogs);
router.get('/:id', auth, focusLogController.getFocusLog);
router.put('/:id', auth, focusLogController.updateFocusLog);
router.delete('/:id', auth, focusLogController.deleteFocusLog);

module.exports = router; 