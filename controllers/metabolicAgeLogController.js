const MetabolicAgeLog = require('../models/MetabolicAgeLog');

exports.createMetabolicAgeLog = async (req, res) => {
  try {
    const metabolicAgeLog = await MetabolicAgeLog.create(req.body);
    res.status(201).json(metabolicAgeLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMetabolicAgeLogs = async (req, res) => {
  try {
    const metabolicAgeLogs = await MetabolicAgeLog.find();
    res.json(metabolicAgeLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMetabolicAgeLog = async (req, res) => {
  try {
    const metabolicAgeLog = await MetabolicAgeLog.findById(req.params.id);
    res.json(metabolicAgeLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateMetabolicAgeLog = async (req, res) => {
  try {
    const metabolicAgeLog = await MetabolicAgeLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(metabolicAgeLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteMetabolicAgeLog = async (req, res) => {
  try {
    await MetabolicAgeLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'MetabolicAgeLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 