import express from "express";
// import cors from "cors";
import "dotenv/config";
import authRouter from "./routes/authRoutes.js";
import connectDB from "./configs/mongodb.js";
import messageRouter from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// To parse incoming requests with JSON payload from req.body
app.use(express.json());
app.use(cookieParser());

// To enable cross origin resource sharing
// app.use(cors());

// Database connection
connectDB();

// Routes
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});
app.listen(PORT, () => {
  console.log("Server Running on Port:", PORT);
});
