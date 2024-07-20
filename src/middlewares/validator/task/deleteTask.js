const { param } = require("express-validator");

module.exports = [
  param("id")
    .isMongoId()
    .withMessage("Invalid task ID format")
    .notEmpty()
    .withMessage("Task ID is required"),
];
