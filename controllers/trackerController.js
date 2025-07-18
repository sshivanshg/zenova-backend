const Tracker = require('../models/Tracker');
const MeditationLog = require('../models/MeditationLog');
const YogaLog = require('../models/YogaLog');
const MuscleMassLog = require('../models/MuscleMassLog');
const BodyFatLog = require('../models/BodyFatLog');
const MeasurementLog = require('../models/MeasurementLog');
const BMRLog = require('../models/BMRLog');
const CardioLog = require('../models/CardioLog');
const MetabolicAgeLog = require('../models/MetabolicAgeLog');
const FocusLog = require('../models/FocusLog');

// Hydration, Steps, Sleep
exports.logTracker = async (req, res) => {
  try {
    let tracker = await Tracker.findOne({ user: req.user.id, date: req.body.date || new Date().toISOString().slice(0,10) });
    if (!tracker) tracker = await Tracker.create({ user: req.user.id, ...req.body });
    else Object.assign(tracker, req.body);
    await tracker.save();
    res.json(tracker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getTracker = async (req, res) => {
  try {
    const tracker = await Tracker.findOne({ user: req.user.id, date: req.query.date || new Date().toISOString().slice(0,10) });
    res.json(tracker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Meditation
exports.logMeditation = async (req, res) => {
  try {
    let log = await MeditationLog.findOne({ user: req.user.id });
    if (!log) log = await MeditationLog.create({ user: req.user.id, sessions: [] });
    log.sessions.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMeditationLogs = async (req, res) => {
  try {
    const log = await MeditationLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Yoga
exports.logYoga = async (req, res) => {
  try {
    let log = await YogaLog.findOne({ user: req.user.id });
    if (!log) log = await YogaLog.create({ user: req.user.id, sessions: [] });
    log.sessions.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getYogaLogs = async (req, res) => {
  try {
    const log = await YogaLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Muscle Mass
exports.logMuscleMass = async (req, res) => {
  try {
    let log = await MuscleMassLog.findOne({ user: req.user.id });
    if (!log) log = await MuscleMassLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMuscleMassLogs = async (req, res) => {
  try {
    const log = await MuscleMassLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Body Fat
exports.logBodyFat = async (req, res) => {
  try {
    let log = await BodyFatLog.findOne({ user: req.user.id });
    if (!log) log = await BodyFatLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBodyFatLogs = async (req, res) => {
  try {
    const log = await BodyFatLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Measurement
exports.logMeasurement = async (req, res) => {
  try {
    let log = await MeasurementLog.findOne({ user: req.user.id });
    if (!log) log = await MeasurementLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMeasurementLogs = async (req, res) => {
  try {
    const log = await MeasurementLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// BMR
exports.logBMR = async (req, res) => {
  try {
    let log = await BMRLog.findOne({ user: req.user.id });
    if (!log) log = await BMRLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBMRLogs = async (req, res) => {
  try {
    const log = await BMRLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Cardio
exports.logCardio = async (req, res) => {
  try {
    let log = await CardioLog.findOne({ user: req.user.id });
    if (!log) log = await CardioLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCardioLogs = async (req, res) => {
  try {
    const log = await CardioLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Metabolic Age
exports.logMetabolicAge = async (req, res) => {
  try {
    let log = await MetabolicAgeLog.findOne({ user: req.user.id });
    if (!log) log = await MetabolicAgeLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMetabolicAgeLogs = async (req, res) => {
  try {
    const log = await MetabolicAgeLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Focus & Screen Time
exports.logFocus = async (req, res) => {
  try {
    let log = await FocusLog.findOne({ user: req.user.id });
    if (!log) log = await FocusLog.create({ user: req.user.id, goals: [], progress: [], screenTime: [] });
    if (req.body.goal) log.goals.push(req.body.goal);
    if (req.body.progress) log.progress.push(req.body.progress);
    if (req.body.screenTime) log.screenTime.push(req.body.screenTime);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getFocusLogs = async (req, res) => {
  try {
    const log = await FocusLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 