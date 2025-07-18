const CigaretteLog = require('../models/CigaretteLog');

exports.createCigaretteLog = async (req, res) => {
  try {
    const cigaretteLog = await CigaretteLog.create(req.body);
    res.status(201).json(cigaretteLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCigaretteLogs = async (req, res) => {
  try {
    const cigaretteLogs = await CigaretteLog.find();
    res.json(cigaretteLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCigaretteLog = async (req, res) => {
  try {
    const cigaretteLog = await CigaretteLog.findById(req.params.id);
    res.json(cigaretteLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateCigaretteLog = async (req, res) => {
  try {
    const cigaretteLog = await CigaretteLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cigaretteLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteCigaretteLog = async (req, res) => {
  try {
    await CigaretteLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'CigaretteLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 