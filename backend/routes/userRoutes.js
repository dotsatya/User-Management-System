import express from "express";

import {
  getUserById,
  editUser,
  deleteUser,
} from "../controllers/userData.js";

const router = express.Router();


router.get("/:id", getUserById);

router.patch("/:id/edit", editUser);

router.delete("/:id/delete", deleteUser);

export default router;