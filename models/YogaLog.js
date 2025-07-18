const mongoose = require('mongoose');

const yogaLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessions: [{
    date: { type: Date, default: Date.now },
    duration: { type: Number, required: true }, // in minutes
    type: { type: String },
    notes: { type: String },
  }],
}, { timestamps: true });

module.exports = mongoose.model('YogaLog', yogaLogSchema); 