import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: String,
    description: String,
    points: Number,
    due_date: String,
    available_from: String,
    available_until: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
