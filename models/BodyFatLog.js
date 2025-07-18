const mongoose = require('mongoose');

const bodyFatLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    bodyFat: { type: Number, required: true }, // percentage
    target: { type: Number },
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('BodyFatLog', bodyFatLogSchema); 