import { createSlice } from '@reduxjs/toolkit';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";//firebase

export const chatsSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    initialChat: (state, action) => {
      //загрузка чатов
      const db = getDatabase();
      const auth = getAuth();
      //
      if (auth == null) 
          throw new Error('auth не найден');
      if (!auth.hasOwnProperty('currentUser'))
          throw new Error('auth.currentUser не найдено');

      //значения из снэпшота
      let current = [];
      const chats_ref = ref(db, 'chats');
      onValue(chats_ref, (snapshot) => current.push(snapshot.val()));

      //запись значений в стейт
      let new_state = [];
      if (current.length == 1) {
        current[0].forEach(item => {
          new_state.push({id: item.id, name: item.name});
        });        
      }
      return new_state;
    },
    addChat: (state, action) => {
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
    },
    deleteChat: (state, action) => {
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
    },
  },
});

export const { addChat, deleteChat, initialChat } = chatsSlice.actions;
export default chatsSlice.reducer;