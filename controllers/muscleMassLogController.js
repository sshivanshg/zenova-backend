const MuscleMassLog = require('../models/MuscleMassLog');

exports.createMuscleMassLog = async (req, res) => {
  try {
    const muscleMassLog = await MuscleMassLog.create(req.body);
    res.status(201).json(muscleMassLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMuscleMassLogs = async (req, res) => {
  try {
    const muscleMassLogs = await MuscleMassLog.find();
    res.json(muscleMassLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMuscleMassLog = async (req, res) => {
  try {
    const muscleMassLog = await MuscleMassLog.findById(req.params.id);
    res.json(muscleMassLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateMuscleMassLog = async (req, res) => {
  try {
    const muscleMassLog = await MuscleMassLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(muscleMassLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteMuscleMassLog = async (req, res) => {
  try {
    await MuscleMassLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'MuscleMassLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 