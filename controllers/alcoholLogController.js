const AlcoholLog = require('../models/AlcoholLog');

exports.createAlcoholLog = async (req, res) => {
  try {
    const alcoholLog = await AlcoholLog.create(req.body);
    res.status(201).json(alcoholLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAlcoholLogs = async (req, res) => {
  try {
    const alcoholLogs = await AlcoholLog.find();
    res.json(alcoholLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAlcoholLog = async (req, res) => {
  try {
    const alcoholLog = await AlcoholLog.findById(req.params.id);
    res.json(alcoholLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateAlcoholLog = async (req, res) => {
  try {
    const alcoholLog = await AlcoholLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(alcoholLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteAlcoholLog = async (req, res) => {
  try {
    await AlcoholLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'AlcoholLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 