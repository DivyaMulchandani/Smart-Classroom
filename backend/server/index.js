const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
// Serve uploads statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import mock data
const attendanceData = require('./data/attendance.json');
const resultData = require('./data/results.json');
const feesData = require('./data/fees.json');
const scheduleData = require('./data/schedule.json');
const students = require('./data/students.json');
const courses = require('./data/courses.json');
const appointments = require('./data/appointments.json');
let documents = require('./data/documents.json');

// API Routes
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

// Admin routes (mock)
// Attendance Management
app.post('/api/admin/attendance', (req, res) => {
  const { date, records } = req.body;
  if (!date || !Array.isArray(records)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  // No persistence yet, just echo back
  res.json({ message: 'Attendance updated', date, records });
});

// Results Management
app.post('/api/admin/results', (req, res) => {
  const { studentId, courseCode, grade, gpa } = req.body;
  if (!studentId || !courseCode || !grade) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  res.json({ message: 'Result recorded', studentId, courseCode, grade, gpa: gpa ?? null });
});

// Courses Management
app.get('/api/admin/courses', (req, res) => {
  res.json(courses);
});

app.post('/api/admin/courses', (req, res) => {
  const { code, name, credits, faculty } = req.body;
  if (!code || !name) {
    return res.status(400).json({ error: 'code and name are required' });
  }
  const exists = courses.find(c => c.code === code);
  if (exists) {
    return res.status(409).json({ error: 'Course already exists' });
  }
  const course = { code, name, credits: credits ?? 0, faculty: faculty ?? '' };
  courses.push(course);
  res.status(201).json(course);
});

// Schedule Management
app.post('/api/admin/schedule', (req, res) => {
  const { day, time, courseCode, room, instructor } = req.body;
  if (!day || !time || !courseCode) {
    return res.status(400).json({ error: 'day, time, courseCode required' });
  }
  res.json({ message: 'Schedule updated', entry: { day, time, courseCode, room, instructor } });
});

// Academic Documents Upload (mock metadata only)
app.get('/api/admin/documents', (req, res) => {
  res.json(documents);
});

app.post('/api/admin/documents', (req, res) => {
  const { title, filename } = req.body;
  if (!title || !filename) {
    return res.status(400).json({ error: 'title and filename required' });
  }
  const doc = {
    id: `doc-${Date.now()}`,
    title,
    filename,
    url: `/uploads/${filename}`,
    uploadedAt: new Date().toISOString()
  };
  documents.push(doc);
  res.status(201).json(doc);
});

// Counselling & Appointments
app.get('/api/admin/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/admin/appointments', (req, res) => {
  const { id, action, newTime } = req.body;
  const item = appointments.find(a => a.id === id);
  if (!item) return res.status(404).json({ error: 'Appointment not found' });
  if (!['approve', 'reject', 'reschedule'].includes(action)) {
    return res.status(400).json({ error: 'Invalid action' });
  }
  if (action === 'reschedule') {
    if (!newTime) return res.status(400).json({ error: 'newTime required for reschedule' });
    item.preferredTime = newTime;
    item.status = 'rescheduled';
  } else {
    item.status = action === 'approve' ? 'approved' : 'rejected';
  }
  res.json(item);
});

// Utility endpoints
app.get('/api/admin/students', (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
