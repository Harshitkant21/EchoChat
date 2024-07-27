import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from "./messageSlice.js";
import {
  loadAuthUserFromLocalStorage,
  saveAuthUserToLocalStorage,
} from "../utils/localStorage";
import socketReducer from "./socketSlice.js";

const preloadedState = {
  user: {
    authUser: loadAuthUserFromLocalStorage(),
    otherUsers: null,
    selectedUser: null,
    onlineUsers: null,
  },
  messages: {
    messages: [],
  },
  socket: {
    socket: null,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
    socket: socketReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveAuthUserToLocalStorage(state.user.authUser);
});

export default store;
