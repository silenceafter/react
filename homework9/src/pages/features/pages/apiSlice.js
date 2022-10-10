import { createAction, createSlice } from '@reduxjs/toolkit';
import fetchAsyncData from '../../../components/CustomApi';

export const apisSlice = createSlice({
  name: 'api',
  initialState: [],
  reducers: {
    addData: (state, action) => {     
      return [...state, {id: state.length + 1, name: action.payload.name,}];
    },
  },
  extraReducers: {
    [fetchAsyncData.fulfilled]:(state, action) => {
      console.log('pending');
      return state = action.payload;
    },
    [fetchAsyncData.rejected]:(state, action) => {
      console.log('rejected');
      return state = action.payload;
    },
  },
});

export const { addData } = apisSlice.actions;
export default apisSlice.reducer;