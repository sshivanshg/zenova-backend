const mongoose = require('mongoose');

const bloodPressureLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    systolic: { type: Number },
    diastolic: { type: Number },
    pulse: { type: Number },
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('BloodPressureLog', bloodPressureLogSchema); 