const mongoose = require('mongoose');

const fastingLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessions: [{
    date: { type: Date, default: Date.now },
    type: { type: String }, // e.g., 'Intermittent', 'Prolonged'
    startTime: { type: Date },
    endTime: { type: Date },
    duration: { type: Number }, // in hours
    mood: { type: String },
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('FastingLog', fastingLogSchema); 