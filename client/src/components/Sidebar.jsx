import React, { useCallback, useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import OtherUsers from "./OtherUsers";
import { setOtherUsers } from "../redux/userSlice";
import toast from "react-hot-toast";
import useGetOtherUsers from "../hooks/useGetOtherUsers.jsx";
import debounce from "lodash.debounce";

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

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query === "") {
        dispatch(setOtherUsers(fullListUser));
        return;
      }
      const filteredUsers = fullListUser.filter((user) =>
        user?.fullName?.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredUsers.length > 0) {
        dispatch(setOtherUsers(filteredUsers));
      } else {
        toast.error("User not found!");
      }
    }, 300),
    [fullListUser, dispatch]
  );

  useEffect(() => {
    debouncedSearch(search);
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    debouncedSearch(search);
  };

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
