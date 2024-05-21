import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Auth Route!");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all", allUsers);

export default router;
