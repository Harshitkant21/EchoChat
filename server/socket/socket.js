// we create a new server called as socket.io server
// socket.io is basically used for real time communication when the user send message it instantly dilevery the content to the other user

import { Server } from "socket.io";
import http from "http";
import express, { query } from "express";

const app = express();

// new top up server on my base server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? [process.env.FRONTEND_URL]
        : ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //userID -> socketID

// Add socket middleware for authentication
io.use((socket, next) => {
  try {
    const token = socket.handshake.query.token;
    if (!token) {
      return next(new Error("Authentication required"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return next(new Error("Invalid token"));
    }

    socket.userId = decoded.userId;
    next();
  } catch (error) {
    next(new Error("Authentication failed"));
  }
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  const userID = socket.handshake.query.userID;
  if (userID !== undefined) {
    userSocketMap[userID] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userID];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
