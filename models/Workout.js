const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
  stats: {
    caloriesBurned: { type: Number, default: 0 },
    duration: { type: Number, default: 0 }, // in minutes
    date: { type: Date, default: Date.now },
  },
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema); 