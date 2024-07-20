const taskModel = require("../../models/task");

const createTask = async (req, res) => {
  const { user_id, task, description } = req.body;

  try {
    const existingTask = await taskModel.findOne({ user_id, task });

    if (existingTask) {
      return res.status(409).json({
        message: "Task already exists for this user.",
      });
    }

    // Create a new task
    const newTask = new taskModel({
      user_id,
      task,
      description,
    });

    await taskModel.save();

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = createTask;
