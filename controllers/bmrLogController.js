const BMRLog = require('../models/BMRLog');

exports.createBMRLog = async (req, res) => {
  try {
    const bmrLog = await BMRLog.create(req.body);
    res.status(201).json(bmrLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBMRLogs = async (req, res) => {
  try {
    const bmrLogs = await BMRLog.find();
    res.json(bmrLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBMRLog = async (req, res) => {
  try {
    const bmrLog = await BMRLog.findById(req.params.id);
    res.json(bmrLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateBMRLog = async (req, res) => {
  try {
    const bmrLog = await BMRLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bmrLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteBMRLog = async (req, res) => {
  try {
    await BMRLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'BMRLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 