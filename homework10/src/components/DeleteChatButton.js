import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, initialChat } from '../pages/features/pages/chatsSlice';

export default function Chats() {
  const dispatch = useDispatch();
  //
  const deleteChatHandler = (event) => {
    dispatch(deleteChat());
    dispatch(initialChat());
  };
  //
  return (
    <Button
        onClick={(e) => deleteChatHandler(e)}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
    >
        Удалить чат
    </Button>
  );
}