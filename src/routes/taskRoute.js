const express = require("express");
const createTaskController = require("../controllers/task/createTask");
const updateTaskController = require("../controllers/task/updateTask");
const deleteTaskController = require("../controllers/task/deleteTask");
const viewTasksByUserController = require("../controllers/task/viewTasksByUser");
const validate = require("../middlewares/validator/validate");
const createTaskSchema = require("../middlewares/validator/task/createTask");
const viewTasksByUserSchema = require("../middlewares/validator/task/viewTasksByUser");
const updateTaskSchema = require("../middlewares/validator/task/updateTask");
const deleteTaskSchema = require("../middlewares/validator/task/deleteTask");
const authenticateJWT = require("../middlewares/authenticateJWT");

const router = express.Router();

router.get(
  "/:user_id",
  viewTasksByUserSchema,
  validate,
  viewTasksByUserController
);
router.post(
  "/create",
  authenticateJWT,
  createTaskSchema,
  validate,
  createTaskController
);
router.put(
  "/update/:id",
  authenticateJWT,
  updateTaskSchema,
  validate,
  updateTaskController
);
router.delete(
  "/delete/:id",
  authenticateJWT,
  deleteTaskSchema,
  validate,
  deleteTaskController
);

module.exports = router;
