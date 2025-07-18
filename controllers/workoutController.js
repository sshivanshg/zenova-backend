const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({ ...req.body, user: req.user.id });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id }).populate('exercises');
    res.json(workouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({ _id: req.params.id, user: req.user.id }).populate('exercises');
    res.json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, req.body, { new: true });
    res.json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Workout deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 