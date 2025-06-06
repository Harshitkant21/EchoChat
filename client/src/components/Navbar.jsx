import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assests/logo.png";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import logo2 from "../assests/logo_dark.png";
import { clearVisit } from "../utils/localStorage.js";
import { setAuthUser } from "../redux/userSlice.js";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      clearVisit();
    } catch (error) {
      toast.error(error.data.message || "Logout Fail");
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex justify-between items-center mx-auto max-w-screen px-5 py-1">
          <img src={logo1} className="h-20 w-20" alt="Echochat Logo" />
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {!authUser && (
              <>
                <Link
                  to="/login"
                  className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Register
                </Link>
              </>
            )}
            {authUser && (
              <>
                <button onClick={logoutHandler} className="btn btn-sm">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
