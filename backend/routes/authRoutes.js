import express from "express";

import {
  register,
  login,
  logout,
} from "../controllers/authController.js";

import {  userData } from "../controllers/userData.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/userdata",userData );

export default router;