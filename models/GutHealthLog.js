const mongoose = require('mongoose');

const gutHealthLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    symptoms: [{ type: String }],
    diet: { type: String },
    protocol: { type: String },
    goodDay: { type: Boolean },
  }],
}, { timestamps: true });

module.exports = mongoose.model('GutHealthLog', gutHealthLogSchema); 