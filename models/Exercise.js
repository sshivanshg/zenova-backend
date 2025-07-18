const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  mediaUrl: { type: String },
  instructions: { type: String },
  muscleGroups: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema); 