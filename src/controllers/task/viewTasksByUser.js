const taskModel = require("../../models/task");

const viewTasksByUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const tasks = await taskModel.find({ user_id });

    if (tasks.length === 0) {
      return res.status(404).json({
        message: "No tasks found for this user.",
      });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = viewTasksByUser;
