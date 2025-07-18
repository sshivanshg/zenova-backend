const GutHealthLog = require('../models/GutHealthLog');

exports.createGutHealthLog = async (req, res) => {
  try {
    const gutHealthLog = await GutHealthLog.create(req.body);
    res.status(201).json(gutHealthLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGutHealthLogs = async (req, res) => {
  try {
    const gutHealthLogs = await GutHealthLog.find();
    res.json(gutHealthLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGutHealthLog = async (req, res) => {
  try {
    const gutHealthLog = await GutHealthLog.findById(req.params.id);
    res.json(gutHealthLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateGutHealthLog = async (req, res) => {
  try {
    const gutHealthLog = await GutHealthLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(gutHealthLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteGutHealthLog = async (req, res) => {
  try {
    await GutHealthLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'GutHealthLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 