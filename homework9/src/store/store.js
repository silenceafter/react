import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../pages/features/pages/profileSlice';
import chatsSlice from '../pages/features/pages/chatsSlice.js';
import messagesSlice from '../pages/features/pages/messagesSlice.js';
import robotSlice from '../pages/features/pages/robotSlice.js';
import apisSlice from '../pages/features/pages/apiSlice.js';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    chats: chatsSlice,
    messages: messagesSlice,
    robot: robotSlice,
    api: apisSlice
  },
  middleware: [thunk]
});

export default store;