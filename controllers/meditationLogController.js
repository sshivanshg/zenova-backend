const MeditationLog = require('../models/MeditationLog');

exports.createMeditationLog = async (req, res) => {
  try {
    const meditationLog = await MeditationLog.create(req.body);
    res.status(201).json(meditationLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMeditationLogs = async (req, res) => {
  try {
    const meditationLogs = await MeditationLog.find();
    res.json(meditationLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMeditationLog = async (req, res) => {
  try {
    const meditationLog = await MeditationLog.findById(req.params.id);
    res.json(meditationLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateMeditationLog = async (req, res) => {
  try {
    const meditationLog = await MeditationLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(meditationLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteMeditationLog = async (req, res) => {
  try {
    await MeditationLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'MeditationLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 