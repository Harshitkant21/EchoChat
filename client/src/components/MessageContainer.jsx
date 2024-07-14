import React from "react";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex gap-2 items-center bg-zinc-150">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Profile Image"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Harshit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
