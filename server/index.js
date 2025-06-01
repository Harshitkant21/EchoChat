import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoutes.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config({});

const PORT = process.env.PORT || 5000;
// middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: process.env.NODE_ENV === "production" 
    ? ["https://echo-chat-woad.vercel.app", "http://localhost:3000"]
    : "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOption));
// Add OPTIONS pre-flight handling
app.options('*', cors(corsOption));

// routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);


server.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at ${PORT}`);
});
