const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../Controller/task.controller");

router.get("/getAllTasks", getAllTasks);
router.get("/getTask/:taskId", getTask);
router.post("/createTask", createTask);
router.patch("/updateTask/:taskId", updateTask);
router.delete("/deleteTask/:taskId", deleteTask);

module.exports = router;
