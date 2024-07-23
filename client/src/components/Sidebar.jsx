import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import OtherUsers from "./OtherUsers";
import { setOtherUsers } from "../redux/userSlice";
import toast from "react-hot-toast";
import debounce from "lodash.debounce";
import useGetOtherUsers from "../hooks/useGetOtherUsers.jsx";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [fullListUser, setFullListUser] = useState([]);
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // fetch all users initially
  useGetOtherUsers();

  useEffect(() => {
    if (otherUsers) {
      setFullListUser(otherUsers);
    }
  }, [otherUsers]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (search === "") {
      // If search is cleared, reset to the full list
      dispatch(setOtherUsers(fullListUser));
      return;
    }
    const filteredUsers = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredUsers) {
      dispatch(setOtherUsers([filteredUsers]));
    } else {
      toast.error("User not found!");
    }
  };

  // const debouncedSearch = useCallback(
  //   debounce((value) => {
  //     setSearch(value);
  //   }, 300),
  //   []
  // );
  // const handleInputChange = (e) => {
  //   debouncedSearch(e.target.value);
  // };

  return (
    <div className="border border-slate-50 p-4 flex flex-col h-full">
      <form
        onSubmit={searchSubmitHandler}
        action=""
        className="flex items-center gap-2 mb-4"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered rounded-md flex-1"
          type="text"
          placeholder="Search... "
        />
        <button type="submit" className="btn bg-zinc-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
    </div>
  );
};

export default Sidebar;
