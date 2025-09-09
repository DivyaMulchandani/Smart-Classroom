
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import mock data
const attendanceData = require('./data/attendance.json');
const resultData = require('./data/results.json');
const feesData = require('./data/fees.json');
const scheduleData = require('./data/schedule.json');

// Connect DB
connectDB();

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/student', require('./routes/student'));
app.get('/api/attendance', (req, res) => {
  res.json(attendanceData);
});

app.get('/api/results', (req, res) => {
  res.json(resultData);
});

app.get('/api/fees', (req, res) => {
  res.json(feesData);
});

app.get('/api/schedule', (req, res) => {
  res.json(scheduleData);
});

app.get('/api/feedback', (req, res) => {
  res.json({
    message: "Feedback data endpoint",
    data: []
  });
});

app.get('/api/course-registration', (req, res) => {
  res.json({
    message: "Course registration data endpoint",
    data: []
  });
});

app.get('/api/credit-summary', (req, res) => {
  res.json({
    message: "Credit summary data endpoint",
    data: []
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
