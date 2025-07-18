const mongoose = require('mongoose');

const cigaretteLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    count: { type: Number, required: true },
  }],
}, { timestamps: true });

module.exports = mongoose.model('CigaretteLog', cigaretteLogSchema); 