import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    addChat: (state, action) => {     
      return [...state, {id: state.length + 1, name: `Чат_${state.length + 1}`,}];
    },
    deleteChat: (state, action) => {
        return state.filter((chat) => chat.id !== state.length);   
    },
  },
});

export const { addChat, deleteChat } = messagesSlice.actions;
export default messagesSlice.reducer;