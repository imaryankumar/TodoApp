import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthentication } from "../middlewares/Auth.js";
const router = express.Router();

router.post("/new", isAuthentication, newTask);

router.get("/my", isAuthentication, getMyTask);

router
  .route("/:id")
  .put(isAuthentication, updateTask)
  .delete(isAuthentication, deleteTask);

export default router;
