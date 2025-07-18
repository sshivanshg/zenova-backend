const CardioLog = require('../models/CardioLog');

exports.createCardioLog = async (req, res) => {
  try {
    const cardioLog = await CardioLog.create(req.body);
    res.status(201).json(cardioLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCardioLogs = async (req, res) => {
  try {
    const cardioLogs = await CardioLog.find();
    res.json(cardioLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCardioLog = async (req, res) => {
  try {
    const cardioLog = await CardioLog.findById(req.params.id);
    res.json(cardioLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateCardioLog = async (req, res) => {
  try {
    const cardioLog = await CardioLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cardioLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteCardioLog = async (req, res) => {
  try {
    await CardioLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'CardioLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 