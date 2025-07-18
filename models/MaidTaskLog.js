const mongoose = require('mongoose');

const maidTaskLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  tasks: [{
    name: { type: String, required: true },
    completed: { type: Boolean, default: false },
    maid: { type: String },
    protocol: { type: String },
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('MaidTaskLog', maidTaskLogSchema); 