import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../pages/features/pages/profileSlice';
import chatsSlice from '../pages/features/pages/chatsSlice.js';
import messagesSlice from '../pages/features/pages/messagesSlice.js';
import robotSlice from '../pages/features/pages/robotSlice.js';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";

const reducers = combineReducers({
  profile: profileSlice,
  chats: chatsSlice,
  messages: messagesSlice,
  robot: robotSlice,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;