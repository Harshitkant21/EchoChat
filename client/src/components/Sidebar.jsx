import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  return (
    <div className="border border-slate-50 p-4 flex flex-col h-full">
      <form action="" className="flex items-center gap-2 mb-4">
        <input
          className="input input-bordered rounded-md flex-1"
          type="text"
          placeholder="Search... "
        />
        <button type="submit" className="btn bg-zinc-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
    </div>
  );
};

export default Sidebar;
