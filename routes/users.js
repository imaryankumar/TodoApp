import express from "express";
import {
  Login,
  Register,
  getMyProfile,
  Logout
} from "../controllers/users.js";
import { isAuthentication } from "../middlewares/Auth.js";

const router = express.Router();


router.post("/new", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/me",isAuthentication,getMyProfile)




export default router;
