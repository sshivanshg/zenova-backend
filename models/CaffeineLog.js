const mongoose = require('mongoose');

const caffeineLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    amount: { type: Number, required: true }, // mg
    type: { type: String }, // e.g., 'Coffee', 'Tea'
  }],
}, { timestamps: true });

module.exports = mongoose.model('CaffeineLog', caffeineLogSchema); 