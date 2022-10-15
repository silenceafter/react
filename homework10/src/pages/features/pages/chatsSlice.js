import { createSlice } from '@reduxjs/toolkit';

export const chatsSlice = createSlice({
  name: 'chat',
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

export const { addChat, deleteChat } = chatsSlice.actions;
export default chatsSlice.reducer;