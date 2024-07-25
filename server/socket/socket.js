// we create a new server called as socket.io server
// socket.io is basically used for real time communication when the user send message it instantly dilevery the content to the other user

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

// new top up server on my base server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
});

export { app, io, server };
