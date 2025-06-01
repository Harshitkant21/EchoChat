import React from "react";
import OtherUser from "./OtherUser";
import "../App.css";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = ({user}) => {
  // my custom hook
  useGetOtherUsers();
  const { otherUsers, loading } = useSelector((store) => store.user);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }
  if (!otherUsers) return; // early return in react
  return (
    <div className="overflow-y-auto h-full scrollbar-custom pr-1">
      {user?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};


export default OtherUsers;
