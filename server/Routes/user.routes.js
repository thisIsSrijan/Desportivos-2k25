import express from "express";
import { registerUser } from "../Controllers/user.controller.js";

const app = express.Router();

app.post("/register", registerUser);

export default app;
