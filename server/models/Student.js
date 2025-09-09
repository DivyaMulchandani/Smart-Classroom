const mongoose = require('mongoose');

const academicDataSchema = new mongoose.Schema(
  {
    attendance: { type: Number, default: 0 },
    results: [
      {
        subject: { type: String },
        grade: { type: String },
      },
    ],
    feesPaid: { type: Boolean, default: false },
  },
  { _id: false }
);

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: '' },
    academicData: { type: academicDataSchema, default: () => ({}) },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);


