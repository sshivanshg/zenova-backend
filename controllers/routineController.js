const RoutineLog = require('../models/RoutineLog');
const MaidTaskLog = require('../models/MaidTaskLog');
const SupplementLog = require('../models/SupplementLog');
const CigaretteLog = require('../models/CigaretteLog');
const AlcoholLog = require('../models/AlcoholLog');
const CaffeineLog = require('../models/CaffeineLog');
const FastingLog = require('../models/FastingLog');
const GutHealthLog = require('../models/GutHealthLog');
const Quest = require('../models/Quest');

// Routine
exports.logRoutine = async (req, res) => {
  try {
    let log = await RoutineLog.findOne({ user: req.user.id, date: req.body.date || new Date().toISOString().slice(0,10) });
    if (!log) log = await RoutineLog.create({ user: req.user.id, ...req.body });
    else Object.assign(log, req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getRoutine = async (req, res) => {
  try {
    const log = await RoutineLog.findOne({ user: req.user.id, date: req.query.date || new Date().toISOString().slice(0,10) });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Maid Task
exports.logMaidTask = async (req, res) => {
  try {
    let log = await MaidTaskLog.findOne({ user: req.user.id, date: req.body.date || new Date().toISOString().slice(0,10) });
    if (!log) log = await MaidTaskLog.create({ user: req.user.id, ...req.body });
    else Object.assign(log, req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getMaidTask = async (req, res) => {
  try {
    const log = await MaidTaskLog.findOne({ user: req.user.id, date: req.query.date || new Date().toISOString().slice(0,10) });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supplement
exports.logSupplement = async (req, res) => {
  try {
    let log = await SupplementLog.findOne({ user: req.user.id });
    if (!log) log = await SupplementLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getSupplementLogs = async (req, res) => {
  try {
    const log = await SupplementLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Cigarette
exports.logCigarette = async (req, res) => {
  try {
    let log = await CigaretteLog.findOne({ user: req.user.id });
    if (!log) log = await CigaretteLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCigaretteLogs = async (req, res) => {
  try {
    const log = await CigaretteLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Alcohol
exports.logAlcohol = async (req, res) => {
  try {
    let log = await AlcoholLog.findOne({ user: req.user.id });
    if (!log) log = await AlcoholLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAlcoholLogs = async (req, res) => {
  try {
    const log = await AlcoholLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Caffeine
exports.logCaffeine = async (req, res) => {
  try {
    let log = await CaffeineLog.findOne({ user: req.user.id });
    if (!log) log = await CaffeineLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getCaffeineLogs = async (req, res) => {
  try {
    const log = await CaffeineLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Fasting
exports.logFasting = async (req, res) => {
  try {
    let log = await FastingLog.findOne({ user: req.user.id });
    if (!log) log = await FastingLog.create({ user: req.user.id, sessions: [] });
    log.sessions.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getFastingLogs = async (req, res) => {
  try {
    const log = await FastingLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Gut Health
exports.logGutHealth = async (req, res) => {
  try {
    let log = await GutHealthLog.findOne({ user: req.user.id });
    if (!log) log = await GutHealthLog.create({ user: req.user.id, logs: [] });
    log.logs.push(req.body);
    await log.save();
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getGutHealthLogs = async (req, res) => {
  try {
    const log = await GutHealthLog.findOne({ user: req.user.id });
    res.json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Quest
exports.createQuest = async (req, res) => {
  try {
    const quest = await Quest.create({ ...req.body, user: req.user.id });
    res.status(201).json(quest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getQuests = async (req, res) => {
  try {
    const quests = await Quest.find({ user: req.user.id });
    res.json(quests);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateQuest = async (req, res) => {
  try {
    const quest = await Quest.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
    res.json(quest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteQuest = async (req, res) => {
  try {
    await Quest.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Quest deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 