// logic for messages in our app

import { Converstaion } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
import mongoose from "mongoose";
import { getReceiverSocketId, io } from "../socket/socket.js";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;

    if (!isValidObjectId(senderId) || !isValidObjectId(receiverId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const { message } = req.body;

    let gotConversation = await Converstaion.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!gotConversation) {
      gotConversation = await Converstaion.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
    }

    await Promise.all([gotConversation.save(), newMessage.save()]);

    // SOCKET.IO

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(201).json({
      newMessage,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.id;

    if (!isValidObjectId(senderId) || !isValidObjectId(receiverId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const converstaion = await Converstaion.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!converstaion) {
      return res.status(404).json({ error: "Converstaion not found" });
    }

    return res.status(200).json(converstaion?.messages);
  } catch (error) {
    console.log(error);
  }
};
