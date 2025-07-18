const mongoose = require('mongoose');

const metabolicAgeLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    metabolicAge: { type: Number, required: true },
    suggestions: { type: String },
  }],
}, { timestamps: true });

module.exports = mongoose.model('MetabolicAgeLog', metabolicAgeLogSchema); 