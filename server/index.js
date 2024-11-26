import connectDB from "./DB/connectDB.js";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import userRoutes from "./Routes/user.routes.js";

configDotenv();
const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
