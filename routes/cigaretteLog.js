const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cigaretteLogController = require('../controllers/cigaretteLogController');

router.post('/', auth, cigaretteLogController.createCigaretteLog);
router.get('/', auth, cigaretteLogController.getCigaretteLogs);
router.get('/:id', auth, cigaretteLogController.getCigaretteLog);
router.put('/:id', auth, cigaretteLogController.updateCigaretteLog);
router.delete('/:id', auth, cigaretteLogController.deleteCigaretteLog);

module.exports = router; 