const mongoose = require('mongoose');

const focusLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goals: [{
    date: { type: Date, default: Date.now },
    goal: { type: String },
    completed: { type: Boolean, default: false },
  }],
  progress: [{
    date: { type: Date, default: Date.now },
    hours: { type: Number },
    notes: { type: String },
  }],
  screenTime: [{
    date: { type: Date, default: Date.now },
    hours: { type: Number },
  }],
}, { timestamps: true });

module.exports = mongoose.model('FocusLog', focusLogSchema); 