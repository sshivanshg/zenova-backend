const mongoose = require('mongoose');

const measurementLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    neck: { type: Number },
    chest: { type: Number },
    waist: { type: Number },
    hip: { type: Number },
    arm: { type: Number },
    notes: { type: String },
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('MeasurementLog', measurementLogSchema); 