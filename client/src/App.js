import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import GetStarted from "./components/GetStarted.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice.js";
import { setOnlineUsers } from "./redux/userSlice.js";
import { checkFirstVisit, setFirstVisit } from "./utils/localStorage.js";

function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(checkFirstVisit());
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8080", {
        query: { userID: authUser._id },
      });
      dispatch(setSocket(socket)); // line 17 socket is set to the use state

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser, dispatch]);
  const handleLogin = () => {
    // Mark the first visit as completed
    setFirstVisit();
    setIsFirstVisit(false);
  };

  return (
    <Router>
      <Routes>
        {isFirstVisit ? (
          <Route path="/" element={<GetStarted onGetStarted={handleLogin} />} />
        ) : authUser ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        )}
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
