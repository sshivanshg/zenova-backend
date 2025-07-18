const mongoose = require('mongoose');

const cardioLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    calories: { type: Number },
    duration: { type: Number }, // in minutes
    type: { type: String },
    goal: { type: Number },
  }],
}, { timestamps: true });

module.exports = mongoose.model('CardioLog', cardioLogSchema); 