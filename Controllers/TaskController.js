import TaskModel from "../Models/Task.js";

// Creating a task
export const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  // Check if required fields are missing
  if (!title || !description || !dueDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newTask = new TaskModel({
      title,
      description,
      dueDate,
      userId: req.user.id, // Associate task with logged-in user
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// updating a task
export const updateTask = async (req, res) => {
  const { title, description, dueDate, status } = req.body;

  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, status },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

// Deleting a task
export const deleteTask = async (req, res) => {

  try {
    const task = await TaskModel.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({message: "Task deleted successfully"});
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};

// Getting a task
export const getTask = async (req, res) => {

    try {
      const task = await TaskModel.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error getting task" });
    }
  };

// Getting all tasks
export const getTasks = async (req, res) => {

    try {
      const task = await TaskModel.find();
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error getting task" });
    }
  };