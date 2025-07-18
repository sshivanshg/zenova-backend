const CaffeineLog = require('../models/CaffeineLog');

exports.createCaffeineLog = async (req, res) => {
  try {
    const caffeineLog = await CaffeineLog.create(req.body);
    res.status(201).json(caffeineLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCaffeineLogs = async (req, res) => {
  try {
    const caffeineLogs = await CaffeineLog.find();
    res.json(caffeineLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCaffeineLog = async (req, res) => {
  try {
    const caffeineLog = await CaffeineLog.findById(req.params.id);
    res.json(caffeineLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateCaffeineLog = async (req, res) => {
  try {
    const caffeineLog = await CaffeineLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(caffeineLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteCaffeineLog = async (req, res) => {
  try {
    await CaffeineLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'CaffeineLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 