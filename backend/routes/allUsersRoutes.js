import express from "express";

import { getAllUsers } from "../controllers/userData.js";


const router = express.Router();

router.get("/", getAllUsers);

export default router;
