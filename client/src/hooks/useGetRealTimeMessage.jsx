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


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    };

    socket.on("newMessage", handleNewMessage);

    // Cleanup listener on unmount
    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, messages, dispatch]);
};

export default useGetRealTimeMessage;
