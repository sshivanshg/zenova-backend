const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register (email/mobile)
router.post('/register', authController.register);

// Login (email/mobile + password)
router.post('/login', authController.login);

// OTP verification
router.post('/verify-otp', authController.verifyOtp);

// Social login (Google/Apple)
router.post('/social-login', authController.socialLogin);

module.exports = router; 