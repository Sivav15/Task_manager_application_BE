const express = require("express");
const createTask = require("../controllers/task/createTask");
const updateTask = require("../controllers/task/updateTask");
const deleteTask = require("../controllers/task/deleteTask");
const viewTasksByUser = require("../controllers/task/viewTasksByUser");
const validate = require("../middlewares/validator/validate");

const router = express.Router();

router.get("/user/:user_id", validate, viewTasksByUser);
router.post("/create", validate, createTask);
router.put("/update/:id", validate, updateTask);
router.delete("/delete/:id", validate, deleteTask);

module.exports = router;
