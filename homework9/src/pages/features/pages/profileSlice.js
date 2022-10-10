import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'checkbox',
  initialState: [{id: 1, value: false}],
  reducers: {
    updateCheckbox: (state, action) => {      
      return [...state, {id: state.length + 1, value: action.payload}];
    },
  },
});

export const { updateCheckbox } = profileSlice.actions;
export default profileSlice.reducer;