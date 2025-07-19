const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { email, mobile, password, ...rest } = req.body;
    if (!email && !mobile) return res.status(400).json({ error: 'Email or mobile required' });
    if (!password) return res.status(400).json({ error: 'Password required' });
    const existing = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existing) return res.status(400).json({ error: 'User already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, mobile, password: hashed, ...rest });
    res.status(201).json({ message: 'User registered', user: { _id: user._id, email: user.email, mobile: user.mobile } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, mobile, password } = req.body;
    const user = await User.findOne(email ? { email } : { mobile });
    if (!user) return res.status(400).json({ error: 'User not found' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, email: user.email, mobile: user.mobile }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { _id: user._id, email: user.email, mobile: user.mobile } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// TODO: Implement OTP and social login
exports.verifyOtp = (req, res) => {
  res.json({ message: 'Verify OTP endpoint (not implemented)' });
};
exports.socialLogin = (req, res) => {
  res.json({ message: 'Social login endpoint (not implemented)' });
}; 