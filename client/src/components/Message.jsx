import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const scroll = useRef();
  const date = new Date();
  const currTime = `${date.getHours()}:${date.getMinutes()}`;
  const { authUser, selectedUser } = useSelector((store) => store.user);
  

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  
  console.log(`${authUser?._id} == ${message?.senderId}`)
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
            src={`${message?.senderId == authUser?._id  ? authUser?.profilePhoto : selectedUser?.profilePhoto}`}
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
