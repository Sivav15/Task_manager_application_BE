const taskModel = require("../../models/task");

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await taskModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully.",
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = deleteTask;
