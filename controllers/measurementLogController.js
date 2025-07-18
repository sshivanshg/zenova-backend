const MeasurementLog = require('../models/MeasurementLog');

exports.createMeasurementLog = async (req, res) => {
  try {
    const measurementLog = await MeasurementLog.create(req.body);
    res.status(201).json(measurementLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMeasurementLogs = async (req, res) => {
  try {
    const measurementLogs = await MeasurementLog.find();
    res.json(measurementLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMeasurementLog = async (req, res) => {
  try {
    const measurementLog = await MeasurementLog.findById(req.params.id);
    res.json(measurementLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateMeasurementLog = async (req, res) => {
  try {
    const measurementLog = await MeasurementLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(measurementLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteMeasurementLog = async (req, res) => {
  try {
    await MeasurementLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'MeasurementLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 