import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { errorMiddleware } from "./middlewares/error.js";
export const app = express();

config({
  path: "./data/config.env",
});

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}));
app.use(express.urlencoded({ extended: true }));


//Routing middleware
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

//Error using Middleware
app.use(errorMiddleware);
