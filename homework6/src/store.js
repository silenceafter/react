import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './pages/features/pages/profileSlice';
import chatsSlice from './pages/features/pages/chatsSlice.js';
import messagesSlice from './pages/features/pages/messagesSlice.js';

export default configureStore({
  reducer: {
    profile: profileSlice,
    chats: chatsSlice,
  },
});