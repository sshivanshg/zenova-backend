const mongoose = require('mongoose');

const menstrualCycleLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    periodStart: { type: Date },
    periodEnd: { type: Date },
    cycleLength: { type: Number },
    fertileWindow: { start: Date, end: Date },
    ovulationDay: { type: Date },
    symptoms: [{ type: String }],
  }],
}, { timestamps: true });

module.exports = mongoose.model('MenstrualCycleLog', menstrualCycleLogSchema); 