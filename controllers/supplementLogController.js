const SupplementLog = require('../models/SupplementLog');

exports.createSupplementLog = async (req, res) => {
  try {
    const supplementLog = await SupplementLog.create(req.body);
    res.status(201).json(supplementLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getSupplementLogs = async (req, res) => {
  try {
    const supplementLogs = await SupplementLog.find();
    res.json(supplementLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getSupplementLog = async (req, res) => {
  try {
    const supplementLog = await SupplementLog.findById(req.params.id);
    res.json(supplementLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateSupplementLog = async (req, res) => {
  try {
    const supplementLog = await SupplementLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(supplementLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteSupplementLog = async (req, res) => {
  try {
    await SupplementLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'SupplementLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 