const { param } = require("express-validator");

module.exports = [
  param("user_id")
    .isMongoId()
    .withMessage("Invalid user ID format")
    .notEmpty()
    .withMessage("User ID is required"),
];
