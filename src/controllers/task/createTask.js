const taskModel = require("../../models/task");

const createTask = async (req, res) => {
  const { user_id, task, description, status } = req.body;

  try {
    const existingTask = await taskModel.findOne({ user_id, task });

    if (existingTask) {
      return res.status(409).json({
        message: "Task already exists for this user.",
      });
    }

    // Create a new task
    const newTask = await taskModel.create({
      user_id,
      task,
      description,
      status,
    });

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = createTask;
