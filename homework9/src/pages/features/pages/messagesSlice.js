import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {     
        const value = action.payload;
        return [...state, {id: state.length + 1, chat: value.chat, author: value.author, message: value.message}];
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;