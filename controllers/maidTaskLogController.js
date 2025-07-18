const MaidTaskLog = require('../models/MaidTaskLog');

exports.createMaidTaskLog = async (req, res) => {
  try {
    const maidTaskLog = await MaidTaskLog.create(req.body);
    res.status(201).json(maidTaskLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMaidTaskLogs = async (req, res) => {
  try {
    const maidTaskLogs = await MaidTaskLog.find();
    res.json(maidTaskLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMaidTaskLog = async (req, res) => {
  try {
    const maidTaskLog = await MaidTaskLog.findById(req.params.id);
    res.json(maidTaskLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateMaidTaskLog = async (req, res) => {
  try {
    const maidTaskLog = await MaidTaskLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(maidTaskLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteMaidTaskLog = async (req, res) => {
  try {
    await MaidTaskLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'MaidTaskLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 