import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  useEffect(() => {
    const fetchOtherUsers = async () => {
      if (!authUser) return;
      try {
        axios.defaults.withCredentials = true;
        const res = await api.get(`/user`);
        //store the value
        console.log(res);
        dispatch(setOtherUsers(res.data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
