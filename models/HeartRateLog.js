const mongoose = require('mongoose');

const heartRateLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    bpm: { type: Number, required: true },
  }],
  reminder: { type: String }, // e.g., 'Every Sunday'
}, { timestamps: true });

module.exports = mongoose.model('HeartRateLog', heartRateLogSchema); 