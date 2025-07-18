const mongoose = require('mongoose');

const routineLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  routines: [{
    name: { type: String, required: true },
    completed: { type: Boolean, default: false },
    notes: { type: String },
  }],
}, { timestamps: true });

module.exports = mongoose.model('RoutineLog', routineLogSchema); 