const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  hydration: {
    intake: { type: Number, default: 0 }, // in ml or glasses
    goal: { type: Number, default: 0 },
  },
  steps: {
    count: { type: Number, default: 0 },
    goal: { type: Number, default: 0 },
  },
  sleep: {
    duration: { type: Number, default: 0 }, // in minutes
    goal: { type: Number, default: 0 },
  },
}, { timestamps: true });

module.exports = mongoose.model('Tracker', trackerSchema); 