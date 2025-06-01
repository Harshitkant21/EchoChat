import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";
import api from "../utils/api"; 

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
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
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
