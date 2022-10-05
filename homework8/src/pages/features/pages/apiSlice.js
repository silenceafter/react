import { createSlice } from '@reduxjs/toolkit';

export const apisSlice = createSlice({
  name: 'api',
  initialState: [],
  reducers: {
    addData: (state, action) => {     
      return [...state, {id: state.length + 1, name: action.payload.name,}];
    },
  },
});

export const { addData } = apisSlice.actions;
export default apisSlice.reducer;