import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    // <div className="App">
    // <Signup/>
    // {/* <Login/> */}
    // </div>
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
