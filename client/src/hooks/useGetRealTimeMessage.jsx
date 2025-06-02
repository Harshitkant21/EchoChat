// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../redux/messageSlice";

// const useGetRealTimeMessage = () => {
//   const { socket } = useSelector((store) => store.socket);
//   const { messages } = useSelector((store) => store.messages);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {
//       dispatch(setMessages([...messages, newMessage]));
//     });
//   }, [socket, setMessages, messages]);
// };

// export default useGetRealTimeMessage;


import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      if (
        (newMessage.senderId === authUser._id && newMessage.receiverId === selectedUser._id) ||
        (newMessage.senderId === selectedUser._id && newMessage.receiverId === authUser._id)
      ) {
        // Check if message already exists to prevent duplicates
        const messageExists = messagesRef.current.some(msg => msg._id === newMessage._id);
        if (!messageExists) {
          dispatch(setMessages([...messagesRef.current, newMessage]));
        }
      }
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, selectedUser, dispatch]);
};

export default useGetRealTimeMessage;
