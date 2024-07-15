import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import image2 from "../assests/image2.jpg";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log(formData);
    try {
      console.log(formData);
      const res = await axios.post(
        `http://localhost:8080/api/v1/user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigation("/");
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setFormData({
      userName: "",
      password: "",
    });
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
                src={image2}
                alt="Login"
              />
            </div>
            {/* for form */}
            <div className="p-6 md:p-9 flex flex-col justify-center text-center">
              <div className="text-black text-xl md:text-2xl font-bold mb-2">
                Welcome Back!
              </div>
              <div className="text-slate-400 text-sm md:text-lg mb-6">
                Sign in to reconnect with your friends and join the
                conversation.
              </div>
              <form onSubmit={handleSubmit}>
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

                <div className="flex items-center justify-center">
                  <button
                    className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-10 rounded-full focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="text-black font-small md:font-medium py-2 px-10 focus:outline-none focus:shadow-outline w-full">
                  No Account?{" "}
                  <Link to="/Signup">
                    <span className="text-slate-700 cursor-pointer hover:text-slate-900 underline">
                      Create here
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
