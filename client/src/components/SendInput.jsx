import axios from "axios";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const Dispatch = useDispatch();
  const {selectedUser} = useSelector((store) => store.user);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(
        `http://localhost:8080/api/v1/message/send/${selectedUser?._id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="px-4 my-3" onClick={onSubmitHandler}>
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
