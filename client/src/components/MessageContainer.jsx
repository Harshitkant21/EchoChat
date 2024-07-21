import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  if (!selectedUser) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        <p>Please select a user to view messages.</p>
      </div>
    );
  }
  return (
    <div className="md:min-w-[550px] flex flex-col h-full">
      <div className="flex gap-2 items-center bg-zinc-300 px-4 py-2 mb-3">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={selectedUser?.profilePhoto} alt="Profile Image" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
