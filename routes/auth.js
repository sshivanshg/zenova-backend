const express = require('express');
const router = express.Router();

// Placeholder: import controllers later

// Register (email/mobile)
router.post('/register', (req, res) => {
  // TODO: Implement registration logic
  res.json({ message: 'Register endpoint' });
});

// OTP verification
router.post('/verify-otp', (req, res) => {
  // TODO: Implement OTP verification logic
  res.json({ message: 'Verify OTP endpoint' });
});

// Social login (Google/Apple)
router.post('/social-login', (req, res) => {
  // TODO: Implement social login logic
  res.json({ message: 'Social login endpoint' });
});

module.exports = router; 