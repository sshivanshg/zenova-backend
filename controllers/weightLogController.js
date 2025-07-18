const WeightLog = require('../models/WeightLog');

exports.createLog = async (req, res) => {
  try {
    const log = await WeightLog.create({ ...req.body, user: req.user.id });
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getLogs = async (req, res) => {
  try {
    const logs = await WeightLog.find({ user: req.user.id });
    res.json(logs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateLog = async (req, res) => {
  try {
    const log = await WeightLog.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteLog = async (req, res) => {
  try {
    await WeightLog.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Log deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 