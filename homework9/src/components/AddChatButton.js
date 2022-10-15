import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, initialChat } from '../pages/features/pages/chatsSlice';

export default function Chats() {
  const dispatch = useDispatch();
  //
  const addChatHandler = (event) => {
    dispatch(addChat());
    dispatch(initialChat());
  };
  //
  return (
    <Button
        onClick={(e) => addChatHandler(e)}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Добавить чат
    </Button>
  );
}