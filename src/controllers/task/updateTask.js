const taskModel = require("../../models/task");

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(id, updateData);

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }
    const newTask = await taskModel.findById(id);

    res.status(200).json({
      message: "Updated successfully.",
      task: newTask,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = updateTask;
