import { createSlice } from '@reduxjs/toolkit';

export const authedSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    updateAuthed: (state, action) => {     
      return action.payload;
    },
  },
});

export const { updateAuthed } = authedSlice.actions;
export default authedSlice.reducer;