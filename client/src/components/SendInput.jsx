import axios from "axios";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice.js";
import api from "../utils/api.js";
import { toast } from "react-hot-toast";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);
  const { socket } = useSelector((store) => store.socket);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedUser || !authUser) {
      toast.error("Please enter a message");
      return;
    }
    if (!socket) {
      toast.error("Connection lost. Please refresh the page.");
      return;
    }

    try {
      const res = await api.post(`/message/send/${selectedUser?._id}`, {
        message,
      });
      console.log(res);
      if (res.data?.newMessage) {
        // Emit socket event for real-time message
        const messageWithIds = {
          ...res.data.newMessage,
          senderId: authUser._id,
          receiverId: selectedUser._id
        };
        socket.emit("sendMessage", messageWithIds);
        
        // Update local state
        dispatch(setMessages([...messages, messageWithIds]));
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to send message");
    }
  };

  return (
    <form className="px-4 my-3" onSubmit={onSubmitHandler}>
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Enter your message"
          className="border text-sm rounded-md block w-full bg-gray-200 text-black p-3 border-zinc-300"
        />
        <button
          type="submit"
          className="absolute flex inset-y-0 end-0 pr-4 items-center"
        >
          <BiSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
