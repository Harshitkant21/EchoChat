import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers, setLoading } from "../redux/userSlice";
import api from "../utils/api";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      dispatch(setLoading(true));
      try {
        axios.defaults.withCredentials = true;
        const res = await api.get(`/user`);
        //store the value
        console.log(res);
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error("Error fetching users:", error);
        dispatch(setOtherUsers([]));
        toast.error("Error fetching users");
      }finally {
        dispatch(setLoading(false)); // Set loading to false after fetching
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
