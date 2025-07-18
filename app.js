require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const mealRoutes = require('./routes/meal');
app.use('/api/meal', mealRoutes);

const groceryRoutes = require('./routes/grocery');
app.use('/api/grocery', groceryRoutes);

const healthRoutes = require('./routes/health');
app.use('/api/health', healthRoutes);

const trackerRoutes = require('./routes/tracker');
app.use('/api/tracker', trackerRoutes);

const routineRoutes = require('./routes/routine');
app.use('/api/routine', routineRoutes);

const weightLogRoutes = require('./routes/weightLog');
app.use('/api/weight-log', weightLogRoutes);

const heartRateLogRoutes = require('./routes/heartRateLog');
app.use('/api/heart-rate-log', heartRateLogRoutes);

const bloodPressureLogRoutes = require('./routes/bloodPressureLog');
app.use('/api/blood-pressure-log', bloodPressureLogRoutes);

const menstrualCycleLogRoutes = require('./routes/menstrualCycleLog');
app.use('/api/menstrual-cycle-log', menstrualCycleLogRoutes);

const medicineLogRoutes = require('./routes/medicineLog');
app.use('/api/medicine-log', medicineLogRoutes);

const exerciseRoutes = require('./routes/exercise');
app.use('/api/exercise', exerciseRoutes);

const workoutRoutes = require('./routes/workout');
app.use('/api/workout', workoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 