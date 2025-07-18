const BodyFatLog = require('../models/BodyFatLog');

exports.createBodyFatLog = async (req, res) => {
  try {
    const bodyFatLog = await BodyFatLog.create(req.body);
    res.status(201).json(bodyFatLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBodyFatLogs = async (req, res) => {
  try {
    const bodyFatLogs = await BodyFatLog.find();
    res.json(bodyFatLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBodyFatLog = async (req, res) => {
  try {
    const bodyFatLog = await BodyFatLog.findById(req.params.id);
    res.json(bodyFatLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateBodyFatLog = async (req, res) => {
  try {
    const bodyFatLog = await BodyFatLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bodyFatLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteBodyFatLog = async (req, res) => {
  try {
    await BodyFatLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'BodyFatLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 