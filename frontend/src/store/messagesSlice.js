import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();
const slice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: messagesAdapter.addOne,
    addMessages: messagesAdapter.addMany,
    removeMessage: messagesAdapter.removeOne,
  },
});


export default slice.reducer;

export const { addMessage, addMessages, removeMessage } = slice.actions;