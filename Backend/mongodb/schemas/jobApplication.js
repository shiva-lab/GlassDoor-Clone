module.exports = (mongoose) => {
  const jobApplicationSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting', required: true },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    status: {
      type: String,
      enum: ['submitted', 'reviewed', 'screening', 'interviewing', 'hired', 'rejected'],
      default: 'submitted',
    },
    resume: { type: String, required: true },
    coverLetter: { type: String, required: true },
  },
  {
    timestamps: true,
  });

  return mongoose.model('JobApplication', jobApplicationSchema);
};
