const Quest = require('../models/Quest');

exports.createQuest = async (req, res) => {
  try {
    const quest = await Quest.create(req.body);
    res.status(201).json(quest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getQuests = async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getQuest = async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);
    res.json(quest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateQuest = async (req, res) => {
  try {
    const quest = await Quest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(quest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteQuest = async (req, res) => {
  try {
    await Quest.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quest deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 