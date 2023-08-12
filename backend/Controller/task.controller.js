const Task = require("../Model/task.model");

const getAllTasks = async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ message: "Get all task successfully", task });
};

const getTask = async (req, res) => {
  const task = await Task.findById({ _id: req.params.taskId });

  if (!task) {
    return res.status(400).json({ message: "Can't find a task" });
  }

  res.status(200).json({ message: "Get task successfully", task });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);

  if (!task) {
    return res.status(400).json({ message: "Can't create a task" });
  }
  res.status(201).json({ message: "Create Task Successfully", task });
};

const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    { _id: req.params.taskId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!task) {
    return res.status(400).json({ message: "Can't find a task" });
  }

  res.status(200).json({ message: "Update task successfully", task });
};

const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.taskId });

  if (!task) {
    return res.status(400).json({ message: "Can't find a task" });
  }

  res.status(200).json({ message: "Delete task successfully", task });
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
