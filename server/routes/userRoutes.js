import express from "express";
import {
  registerUser,
  loginUser,
  usercredits,
} from "../controllers/userControllers.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/credits", userAuth, usercredits);

export default userRouter;
