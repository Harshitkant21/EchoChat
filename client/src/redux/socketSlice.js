import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
  socketId: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socketId = action?.payload?.id || null;
    },
    clearSocket: (state) => {
      state.socketId = null;
    },
  },
});

export const { setSocket, clearSocket } = socketSlice.actions;
export default socketSlice.reducer;
