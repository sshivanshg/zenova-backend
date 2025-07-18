const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const questController = require('../controllers/questController');

router.post('/', auth, questController.createQuest);
router.get('/', auth, questController.getQuests);
router.get('/:id', auth, questController.getQuest);
router.put('/:id', auth, questController.updateQuest);
router.delete('/:id', auth, questController.deleteQuest);

module.exports = router; 