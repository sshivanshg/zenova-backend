const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  mobile: { type: String, unique: true, sparse: true },
  password: { type: String }, // For social/OTP, can be empty
  googleId: { type: String },
  appleId: { type: String },
  // Onboarding fields
  firstName: { type: String },
  dob: { type: Date },
  biologicalSex: { type: String, enum: ['Male', 'Female', 'Other'] },
  height: { type: String },
  weight: { type: String },
  heightUnit: { type: String, enum: ['cm', 'ft/in'] },
  weightUnit: { type: String, enum: ['kg', 'lb'] },
  dietType: { type: String },
  activityLevel: { type: String },
  medicalConditions: [{ type: String }],
  location: { type: String },
  languages: [{ type: String }],
  // Aura/mood/goals
  mood: { type: String },
  lifestyle: { type: String },
  goals: [{ type: String }],
  // AI agent preferences
  aiAgents: [{
    name: String,
    gender: String,
    tonality: String,
    type: String // e.g., Lifestyle Coach, Nutritionist, etc.
  }],
  onboardingCompleted: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 