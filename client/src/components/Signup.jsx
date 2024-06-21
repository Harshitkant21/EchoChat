import React, { useState } from "react";
import image1 from "../assests/image1.jpg";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <div className="md:grid md:place-content-center md:h-screen">
        <div className="max-w-sm mx-auto bg-white md:rounded-xl overflow-hidden shadow-lg ring-2 ring-gray-300 ring-opacity-50 md:max-w-3xl">
          <div className="md:flex">
            {/* for image */}
            <div className="flex-shrink-0 md:flex-shrink">
              <img
                className="h-48 w-full object-cover md:h-full md:w-70 md:max-w-lg"
                src={image1}
                alt="Signup"
              />
            </div>
            {/* for form */}
            <div className="p-6 md:p-9 flex flex-col justify-center text-center">
              <div className="text-black text-xl md:text-2xl font-bold mb-2">
                Sign Up
              </div>
              <div className="text-slate-400 text-sm md:text-lg mb-6">
                Join now and start connecting with friends and family in
                real-time!
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    className="peer h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 focus:outline-none focus:border-slate-400"
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="peer h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 focus:outline-none focus:border-slate-400"
                    id="userName"
                    type="text"
                    placeholder="Username"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="h-10 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      id="password"
                      type={passwordVisible ? "text" : "password"}
                      className="peer h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 focus:outline-none focus:border-slate-400 pr-10"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
                    >
                      <svg
                        className="flex-shrink-0 text-gray-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {!passwordVisible ? (
                          <>
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                            <line x1="2" x2="22" y1="2" y2="22"></line>
                          </>
                        ) : (
                          <>
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={passwordVisible ? "text" : "password"}
                      className="peer h-10 w-full border-b-2 bg-transparent border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
                    >
                      <svg
                        className="flex-shrink-0 text-gray-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {!passwordVisible ? (
                          <>
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                            <line x1="2" x2="22" y1="2" y2="22"></line>
                          </>
                        ) : (
                          <>
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="text-black font-small md:font-medium py-2 px-10 focus:outline-none focus:shadow-outline w-full">
                  Already have an account?{" "}
                  <span className="text-slate-700 cursor-pointer hover:text-slate-900 underline">
                    Login here
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
