import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './pages/features/pages/profileSlice';

export default configureStore({
  reducer: {
    profile: profileSlice,
  },
});