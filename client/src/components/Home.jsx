import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import Navbar from "./Navbar";
import { setAuthUser } from "../redux/userSlice.js";
import { useDispatch } from "react-redux";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      dispatch(setAuthUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-1 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <div className="w-80">
          <Sidebar />
        </div>
        <div className="flex-1">
          <MessageContainer className="flex-1 bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
