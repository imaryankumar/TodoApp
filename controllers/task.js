import { TaskModal } from "../models/task.js";
export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
  await TaskModal.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    message: "Task added Succesfully",
  });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res, next) => {
 try {
  const userid = req.user;
  const task = await TaskModal.find({ user: userid });
  res.status(200).json({
    success: true,
    task,
  });
 } catch (error) {
   next(error);
 }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

  const task = await TaskModal.findById(id);

  if (!task) return next(new Error("Invalid Id"));

  task.isCompleted = !task.isCompleted;
  await task.save();

  res.status(200).json({
    success: true,
    message: "Task Updated!",
  });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

  const task = await TaskModal.findById(id);
  if (!task) return next(new Error("Invalid Id"));
  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task Deleted!",
  });
  } catch (error) {
    next(error);
  }
};
