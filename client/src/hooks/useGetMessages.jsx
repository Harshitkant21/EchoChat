import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8080/api/v1/message/667404b1f3c893a0ee7b7121`
        );
        dispatch(setMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, []);
};

export default useGetMessages;
