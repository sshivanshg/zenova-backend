const mongoose = require('mongoose');

const bmrLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{
    date: { type: Date, default: Date.now },
    bmr: { type: Number, required: true },
    height: { type: Number },
    weight: { type: Number },
  }],
}, { timestamps: true });

module.exports = mongoose.model('BMRLog', bmrLogSchema); 