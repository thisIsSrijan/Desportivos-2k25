import connectDB from "./DB/connectDB.js";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import userRoutes from "./Routes/user.routes.js";

const allowedOrigins = process.env.CORS_ORIGINS.split(",");

configDotenv();
const app = express();
connectDB();

const corsPolicy = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by CORS, register via desportivos.in only!"));
    }
  },
  methods: "GET,POST,OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsPolicy));

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
