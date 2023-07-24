import mongoose from "mongoose";

//DB Schema
const UrlSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    unqiue: true,
    require: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//DB Model
export const TaskModal = mongoose.model("Tasks", UrlSchema);
