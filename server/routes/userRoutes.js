import express from "express";
import {
  registerUser,
  loginUser,
  usercredits,
  paymentRazorpay,
  verifyRazorpay,
} from "../controllers/userControllers.js";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, usercredits);
userRouter.post("/payment",userAuth, paymentRazorpay);
userRouter.post("/verify-payment", verifyRazorpay);


export default userRouter;
