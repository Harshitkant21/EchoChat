import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`flex gap-2 items-center hover:bg-zinc-300 rounded-md p-2 cursor-pointer ${
          selectedUser?._id === user?._id ? "bg-zinc-300" : ""
        }`}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user?.profilePhoto} alt="Profile Image" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullName || "Unknown User"}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default OtherUser;
