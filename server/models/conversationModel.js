import mongoose, { Types } from "mongoose";

const conversationModel = new mongoose.Schema(
  {
    participants: [
      {
        types: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ],
    messages: [
      {
        types: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      }
    ]
  },
  { timestamps: true }
);

export const Converstaion = mongoose.model("Conversation", conversationModel);
