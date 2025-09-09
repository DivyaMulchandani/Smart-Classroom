import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "" },
  academicData: {
    attendance: { type: Number, default: 0 },
    results: [{ subject: String, grade: String }],
    feesPaid: { type: Boolean, default: false }
  }
});

export default mongoose.model("Student", studentSchema);
