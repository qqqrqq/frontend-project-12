import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChannel: null,
};

const slice = createSlice({
  name: "currentChannel",
  initialState,
  reducers: {
    setChannel(state, action) {
      const { id } = action.payload;
      state.currentChannel = id;
    },
  },
});

export default slice.reducer;

export const { setChannel } = slice.actions;
