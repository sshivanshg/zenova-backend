const mongoose = require('mongoose');

const alcoholLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    count: { type: Number, required: true },
    context: { type: String }, // e.g., 'Socially', 'Alone'
  }],
}, { timestamps: true });

module.exports = mongoose.model('AlcoholLog', alcoholLogSchema); 