const YogaLog = require('../models/YogaLog');

exports.createYogaLog = async (req, res) => {
  try {
    const yogaLog = await YogaLog.create(req.body);
    res.status(201).json(yogaLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getYogaLogs = async (req, res) => {
  try {
    const yogaLogs = await YogaLog.find();
    res.json(yogaLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getYogaLog = async (req, res) => {
  try {
    const yogaLog = await YogaLog.findById(req.params.id);
    res.json(yogaLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateYogaLog = async (req, res) => {
  try {
    const yogaLog = await YogaLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(yogaLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteYogaLog = async (req, res) => {
  try {
    await YogaLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'YogaLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 