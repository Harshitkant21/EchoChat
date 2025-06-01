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
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      if (selectedUser?._id === newMessage.senderId || selectedUser?._id === newMessage.receiverId) {
        dispatch(setMessages([...messages, newMessage]));
      }
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, selectedUser, messages, dispatch]);
};

export default useGetRealTimeMessage;
