const mongoose = require('mongoose');

const medicineLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicines: [{
    name: { type: String, required: true },
    startDate: { type: Date },
    repeat: { type: String }, // e.g., 'Daily', 'Weekly'
    times: [{ type: String }],
    history: [{
      date: { type: Date },
      status: { type: String, enum: ['Taken', 'Missed'] },
    }],
  }],
  reminder: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('MedicineLog', medicineLogSchema); 