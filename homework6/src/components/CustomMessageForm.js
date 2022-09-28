import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../pages/features/pages/messagesSlice.js';
import { addAnswer } from '../pages/features/pages/robotSlice.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function CustomMessageForm(id) {    
    const dispatch = useDispatch();
    const addMessageHandler = (event, id) => {
        event.preventDefault();
        const author = event.currentTarget[0].value;
        const message = event.currentTarget[1].value;
        dispatch(addMessage({chat: id.value, author: author, message: message}));
        dispatch(addAnswer({value: `Добавлено сообщение пользователя "${author.trim().toLowerCase()}"`}))
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