import React from "react";
import { BiSend } from "react-icons/bi";

const SendInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Enter your message"
          className="border text-sm rounded-md block w-full bg-gray-200 text-black p-3 border-zinc-300"
        />
        <button className="absolute flex inset-y-0 end-0 pr-4 items-center">
          <BiSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
