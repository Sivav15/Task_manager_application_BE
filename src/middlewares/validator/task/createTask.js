const { body } = require("express-validator");

module.exports = [
  body("user_id")
    .isMongoId()
    .withMessage("Invalid user ID format")
    .notEmpty()
    .withMessage("User ID is required"),
  body("task")
    .isString()
    .withMessage("Task must be a string")
    .notEmpty()
    .withMessage("Task is required"),
  body("status")
    .isString()
    .withMessage("Status must be a string")
    .notEmpty()
    .withMessage("Status is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];
