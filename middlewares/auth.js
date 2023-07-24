import { urlModal } from "../models/user.js";
import jwt from "jsonwebtoken";
export const isAuthentication = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First!",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await urlModal.findById(decoded._id);
  next();
};
