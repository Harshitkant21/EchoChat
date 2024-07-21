import axios from "axios";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice.js";
import { toast } from "react-hot-toast";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
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
