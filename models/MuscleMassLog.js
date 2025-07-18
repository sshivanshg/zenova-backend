const mongoose = require('mongoose');

const muscleMassLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    muscleMass: { type: Number, required: true }, // percentage
    target: { type: Number },
  }],
}, { timestamps: true });

module.exports = mongoose.model('MuscleMassLog', muscleMassLogSchema); 