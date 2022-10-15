import { createSlice } from '@reduxjs/toolkit';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

export const messagesSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    initialMessage: (state, action) => {
      //загрузка сообщений
      const db = getDatabase();
      const auth = getAuth();
      //
      if (auth == null) 
          throw new Error('auth не найден');
      if (!auth.hasOwnProperty('currentUser'))
          throw new Error('auth.currentUser не найдено');
      
      let current = [];
      const messages_ref = ref(db, 'messages');
      onValue(messages_ref, (snapshot) => current.push(snapshot.val()));

      //запись значений в стейт
      let new_state = [];
      if (current.length == 1) {
        current[0].forEach(item => {
          new_state.push({id: item.id, chat: item.chat, author: item.author, message: item.message});
        });        
      }
      return new_state;
    },
    addMessage: (state, action) => {     
        /*const value = action.payload;
        return [...state, {id: state.length + 1, chat: value.chat, author: value.author, message: value.message}];*/
      //добавить сообщение
      const value = action.payload;
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
          const dbRef = ref(db, '/messages');
          let total = 0;
          onValue(dbRef, (snapshot) => {
              snapshot.forEach((item) => {
              total += 1;
              });
          });

          set(ref(db, `messages/${total+1}`), {
              email: email,
              id: total+1,
              chat: value.chat,
              author: value.author,
              message: value.message
          });
      }
    },
  },
});

export const { addMessage, initialMessage } = messagesSlice.actions;
export default messagesSlice.reducer;