import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../pages/features/pages/chatsSlice';
import Button from '@mui/material/Button';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue, numChildren } from "firebase/database";

export default function Chats() {
  //const dispatch = useDispatch();
  //
  const addChatHandler = (event) => {
    //dispatch(addChat());
    const db = getDatabase();
    const auth = getAuth();
    //
    if (auth == null) 
        throw new Error('auth не найден');
    if (!auth.hasOwnProperty('currentUser'))
        throw new Error('auth.currentUser не найдено');
    
    //email учетной записи
    const email = auth.currentUser.email;
    if (email.trim() != '') {
      //количество элементов
      const dbRef = ref(db, '/chats');
      let total = 0;
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((item) => {
          total += 1;
        });
      });

      set(ref(db, `chats/${total+1}`), {
        email: email,
        id: total+1,
        name: `Чат_${total+1}`
      });
    }
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