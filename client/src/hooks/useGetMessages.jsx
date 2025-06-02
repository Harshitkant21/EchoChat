import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { toast } from "react-hot-toast";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id) {
      console.warn("Selected user ID is undefined or null");
        return;
      }
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/message/${selectedUser?._id}`
        );
        console.log(res);
        if (res.data) {
          dispatch(setMessages(res.data||[]));
        }
      } catch (error) {
        console.log(error);
        if (error.response?.status !== 404) {
          toast.error("Failed to load messages");
        }
        dispatch(setMessages([]));
      }
    };
    fetchMessages();
  }, [selectedUser]);
};

export default useGetMessages;
