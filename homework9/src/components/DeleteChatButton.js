import React from 'react';
import Button from '@mui/material/Button';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

export default function Chats() {
  const deleteChatHandler = (event) => {
    //dispatch(deleteChat());
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

      let lastDbRef = ref(db, `/chats/${total}`);
      remove(lastDbRef).catch(e => console.log(e));
    }
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