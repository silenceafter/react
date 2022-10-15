import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../pages/features/pages/robotSlice.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue, numChildren } from "firebase/database";

function robotAnswer(author) {
    return function (dispatch) {
      dispatch(addAnswer({value: `Добавлено сообщение пользователя "${author.trim().toLowerCase()}"`}));
    }
  }

export default function CustomMessageForm(id) {
    const dispatch = useDispatch();
    const addMessageHandler = (event, id) => {
        event.preventDefault();
        const author = event.currentTarget[0].value;
        const message = event.currentTarget[1].value;
        //dispatch(addMessage({chat: id.value, author: author, message: message}));
        //firebase
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
            chat: id.value,
            author: author,
            message: message
        });
        }
        //
        dispatch(robotAnswer(author));
    };
    console.log(useSelector((state) => state));//вывод значений стора
    //
    return (
        <Box component="form" onSubmit={(e) => addMessageHandler(e, id)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="textfield_author"
                    label="Author"
                    variant="filled"
                    name="author"
                    autoComplete="author"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="textfield_message"
                    label="Message"
                    variant="filled"
                    name="message"
                    autoComplete="message"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Добавить сообщение
                </Button>                
        </Box>        
    );
}