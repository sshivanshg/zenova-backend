const FocusLog = require('../models/FocusLog');

exports.createFocusLog = async (req, res) => {
  try {
    const focusLog = await FocusLog.create(req.body);
    res.status(201).json(focusLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getFocusLogs = async (req, res) => {
  try {
    const focusLogs = await FocusLog.find();
    res.json(focusLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getFocusLog = async (req, res) => {
  try {
    const focusLog = await FocusLog.findById(req.params.id);
    res.json(focusLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateFocusLog = async (req, res) => {
  try {
    const focusLog = await FocusLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(focusLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteFocusLog = async (req, res) => {
  try {
    await FocusLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'FocusLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 