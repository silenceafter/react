import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const profileSlice = createSlice({
  name: 'checkbox',
  initialState: [{id: uuid(), value: false}],
  reducers: {
    updateCheckbox: (state, action) => {      
      return [...state, {id: uuid(), value: action.payload}];
    },
  },
});

export const { updateCheckbox } = profileSlice.actions;
export default profileSlice.reducer;