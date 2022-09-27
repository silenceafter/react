import { createSlice } from '@reduxjs/toolkit';

export const robotSlice = createSlice({
  name: 'robot',
  initialState: [],
  reducers: {
    addAnswer: (state, action) => {
        return [...state, {id: state.length + 1, value: action.payload.value}];
    },
  },
});

export const { addAnswer } = robotSlice.actions;
export default robotSlice.reducer;