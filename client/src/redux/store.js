import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from "./messageSlice.js";
import { loadAuthUserFromLocalStorage } from "../utils/localStorage";

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
