const mongoose = require('mongoose');

const weightLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    weight: { type: Number, required: true },
  }],
  targetWeight: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('WeightLog', weightLogSchema); 