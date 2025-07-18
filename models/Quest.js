const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['daily', 'weekly'], required: true },
  title: { type: String, required: true },
  tasks: [{
    description: String,
    completed: { type: Boolean, default: false },
  }],
  status: { type: String, enum: ['active', 'completed', 'claimed'], default: 'active' },
  rewards: {
    coins: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
  },
  completedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Quest', questSchema); 