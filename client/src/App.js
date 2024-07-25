import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

function App() {
  const { authUser } = useSelector((store) => store.user);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (authUser && !socket) {
      const socket = io("http://localhost:8080", {});
      setSocket(socket); // line 16 socket is set to the use state
    }
  }, [authUser]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
