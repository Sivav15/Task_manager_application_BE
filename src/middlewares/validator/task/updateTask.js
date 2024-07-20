const { body, param } = require("express-validator");

module.exports = [
  param("id")
    .isMongoId()
    .withMessage("Invalid task ID format")
    .notEmpty()
    .withMessage("Task ID is required"),
  body("task").optional().isString().withMessage("Task must be a string"),
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
