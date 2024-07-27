import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assests/logo.png";

function GetStarted({ onGetStarted }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      onGetStarted();
      navigate("/register");
    }, 200000);

    return () => clearTimeout(timer);
  }, [navigate, onGetStarted]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="bg-slate-100 border-gray-200 dark:bg-gray-900 fixed w-full z-10 top-0 left-0">
        <div className="flex justify-between items-center mx-auto max-w-screen px-5 py-1">
          <img src={logo1} className="h-20 w-20" alt="Echochat Logo" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow pt-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold text-black dark:text-white mb-4">
          Welcome to Echochat!
        </h1>
        <p className="text-xl text-black dark:text-gray-300 mb-8">
          Connect, chat, and collaborate with ease.
        </p>
        <button
          onClick={() => {
            onGetStarted();
            navigate("/register");
          }}
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-lg bg-black group"
        >
          {/* Background Animation */}
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-slate-600 group-hover:h-full"></span>

          {/* Right Arrow Icon (Appears on Hover) */}
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>

          {/* Left Arrow Icon (Appears on Hover) */}
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>

          {/* Button Text */}
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white group-hover:translate-x-8">
            Get Started
          </span>
        </button>
      </div>

      {/* Footer Content */}
      <footer className="bg-white dark:bg-gray-900 p-4 text-center">
        <p className="text-gray-500 dark:text-white">For Testing you can use </p>
        <p className="text-gray-500 dark:text-white">
          <span className="text-gray-500 dark:text-white font-bold">Username1:</span> <span>Test1</span>{" "}
          <span className="text-gray-500 dark:text-white font-bold">Password:</span> <span>12345</span>
        </p>
        <p className="text-gray-500 dark:text-white">
          <span className="text-gray-500 dark:text-white font-bold">Username2:</span> <span>Test2</span>{" "}
          <span className="text-gray-500 dark:text-white font-bold">Password:</span> <span>12345</span>
        </p>
      </footer>
    </div>
  );
}

export default GetStarted;
