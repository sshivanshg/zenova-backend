const RoutineLog = require('../models/RoutineLog');

exports.createRoutineLog = async (req, res) => {
  try {
    const routineLog = await RoutineLog.create(req.body);
    res.status(201).json(routineLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getRoutineLogs = async (req, res) => {
  try {
    const routineLogs = await RoutineLog.find();
    res.json(routineLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getRoutineLog = async (req, res) => {
  try {
    const routineLog = await RoutineLog.findById(req.params.id);
    res.json(routineLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateRoutineLog = async (req, res) => {
  try {
    const routineLog = await RoutineLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(routineLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteRoutineLog = async (req, res) => {
  try {
    await RoutineLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'RoutineLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 