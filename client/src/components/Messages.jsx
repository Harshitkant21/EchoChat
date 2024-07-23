import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((store) => store.messages);

  if (!messages || messages.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        No messages to show.
      </div>
    );
  }
  return (
    <div className="px-4 flex-1 overflow-auto scrollbar-custom">
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
