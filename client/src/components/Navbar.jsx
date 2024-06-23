import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assests/logo.png";
import logo2 from "../assests/logo_dark.png";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <img src={logo1} className="h-12 w-12" alt="Flowbite Logo" />
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/login"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
