import express from "express";
import { body } from "express-validator";
import {
  loggedUser,
  handleRegister,
  handleSignIn,
  updateUser,
  findUser,
  emailConfirm,
} from "../controllers/userControllers.js";
import auth from "../middleware/user-auth.js";
import upload from "../middleware/mutlerLocalstorage.js";

const userRoutes = express.Router();

userRoutes.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

userRoutes.post(
  "/register",
  [
    // Sanitization middleware
    body("username").trim().escape(),
  ],
  handleRegister
);
userRoutes.post("/signin", handleSignIn);
userRoutes.get("/loggeduser", auth, loggedUser);
userRoutes.get("/:userId", findUser);
userRoutes.put(
  "/updateuser/:userId",
  auth,
  //should match the name attribute of the input field in your form where the file is being uploaded
  upload.single("profileImage"),
  updateUser
);

userRoutes.post("/emailconfirm/:token", emailConfirm);

export default userRoutes;
