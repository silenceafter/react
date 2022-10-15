import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../pages/features/pages/chatsSlice';
import Button from '@mui/material/Button';

export default function Chats() {
  const dispatch = useDispatch();
  //
  const addChatHandler = (event) => {
    dispatch(addChat());
  };
  console.log(useSelector((state) => state));//вывод значений стора
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