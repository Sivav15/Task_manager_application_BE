const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
