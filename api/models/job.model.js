import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  logo:{
    type: String,
    required: true
  },
  about:{
    type: String,
    required: true
  },
  information:{
    type: String,
    required: true
  },
  refUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;