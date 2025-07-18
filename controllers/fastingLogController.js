const FastingLog = require('../models/FastingLog');

exports.createFastingLog = async (req, res) => {
  try {
    const fastingLog = await FastingLog.create(req.body);
    res.status(201).json(fastingLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getFastingLogs = async (req, res) => {
  try {
    const fastingLogs = await FastingLog.find();
    res.json(fastingLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getFastingLog = async (req, res) => {
  try {
    const fastingLog = await FastingLog.findById(req.params.id);
    res.json(fastingLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateFastingLog = async (req, res) => {
  try {
    const fastingLog = await FastingLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fastingLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteFastingLog = async (req, res) => {
  try {
    await FastingLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'FastingLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 