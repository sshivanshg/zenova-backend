const MenstrualCycleLog = require('../models/MenstrualCycleLog');

exports.createLog = async (req, res) => {
  try {
    const log = await MenstrualCycleLog.create({ ...req.body, user: req.user.id });
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getLogs = async (req, res) => {
  try {
    const logs = await MenstrualCycleLog.find({ user: req.user.id });
    res.json(logs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateLog = async (req, res) => {
  try {
    const log = await MenstrualCycleLog.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteLog = async (req, res) => {
  try {
    await MenstrualCycleLog.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Log deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 