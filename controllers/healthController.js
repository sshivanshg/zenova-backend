const WeightLog = require('../models/WeightLog');
const HeartRateLog = require('../models/HeartRateLog');
const BloodPressureLog = require('../models/BloodPressureLog');
const MenstrualCycleLog = require('../models/MenstrualCycleLog');
const MedicineLog = require('../models/MedicineLog');

// Weight Log
exports.logWeight = async (req, res) => {
  try {
    let log = await WeightLog.findOne({ user: req.user.id });
    if (!log) log = await WeightLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getWeightLogs = async (req, res) => {
  try {
    const log = await WeightLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Heart Rate Log
exports.logHeartRate = async (req, res) => {
  try {
    let log = await HeartRateLog.findOne({ user: req.user.id });
    if (!log) log = await HeartRateLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getHeartRateLogs = async (req, res) => {
  try {
    const log = await HeartRateLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Blood Pressure Log
exports.logBloodPressure = async (req, res) => {
  try {
    let log = await BloodPressureLog.findOne({ user: req.user.id });
    if (!log) log = await BloodPressureLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBloodPressureLogs = async (req, res) => {
  try {
    const log = await BloodPressureLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Menstrual Cycle Log
exports.logMenstrualCycle = async (req, res) => {
  try {
    let log = await MenstrualCycleLog.findOne({ user: req.user.id });
    if (!log) log = await MenstrualCycleLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMenstrualCycleLogs = async (req, res) => {
  try {
    const log = await MenstrualCycleLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Medicine Log
exports.logMedicine = async (req, res) => {
  try {
    let log = await MedicineLog.findOne({ user: req.user.id });
    if (!log) log = await MedicineLog.create({ user: req.user.id, medicines: [] });
    log.medicines.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMedicineLogs = async (req, res) => {
  try {
    const log = await MedicineLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 