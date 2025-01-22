import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true
  },
  rollNo: {
    type: Number,
    required: true
  }
})

export default mongoose.model("student", studentSchema);