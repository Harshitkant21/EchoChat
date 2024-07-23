import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from "./messageSlice.js";

const loadAuthUserFromLocalStorage = () => {
  try {
    const authUser = localStorage.getItem("authUser");
    return authUser ? JSON.parse(authUser) : null;
  } catch (e) {
    console.error("Could not load authUser from local storage:", e);
    return null;
  }
};

const preloadedState = {
  user: {
    authUser: loadAuthUserFromLocalStorage(),
    otherUsers: null,
    selectedUser: null,
  },
  messages: {
    messages: null,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
  },
  preloadedState, 
});

export default store;
