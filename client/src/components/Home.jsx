import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex rounded-lg overflow-hidden bg-gray-400">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
