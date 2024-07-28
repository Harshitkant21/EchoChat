import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();
  const { authUser, selectedUser } = useSelector((store) => store.user);
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    // Convert to IST
    const istOffset = 330; // IST is UTC +5:30
    const istTime = new Date(date.getTime() + istOffset * 60000);

    let hours = istTime.getUTCHours();
    const minutes = String(istTime.getUTCMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedHours = String(hours).padStart(2, "0");

    return `${formattedHours}:${minutes} ${ampm}`;
  };

  const currTime = formatTime(message.createdAt);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log(`${authUser?._id} == ${message?.senderId}`);
  return (
    <div
      ref={scroll}
      className={`chat ${
        authUser?._id == message?.senderId ? "chat-end" : "chat-start"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Profile"
            src={`${
              message?.senderId == authUser?._id
                ? authUser?.profilePhoto
                : selectedUser?.profilePhoto
            }`}
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50">{currTime}</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>
    </div>
  );
};

export default Message;
