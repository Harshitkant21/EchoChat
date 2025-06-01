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
import { socket } from "../redux/socketSlice";

const useGetRealTimeMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      if (selectedUser?._id === newMessage.senderId || selectedUser?._id === newMessage.receiverId) {
        dispatch(setMessages([...messages, newMessage]));
      }
    });

    // Cleanup listener on unmount
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, dispatch, selectedUser]);
};

export default useGetRealTimeMessage;
