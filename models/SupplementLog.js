const mongoose = require('mongoose');

const supplementLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    supplement: { type: String, required: true },
    dosage: { type: String },
    fastingAfter: { type: String },
    notes: { type: String },
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('SupplementLog', supplementLogSchema); 