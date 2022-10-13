import React, { useState } from 'react';
//import { shallowEqual, useSelector } from 'react-redux';
//import { getProfile } from '../store/profileSelectors.js';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Registration = () => {
    //const pages = useSelector(getProfile, shallowEqual);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const registrationHandler = (event, id) => {
        event.preventDefault();
        /*const author = event.currentTarget[0].value;
        const message = event.currentTarget[1].value;
        dispatch(addMessage({chat: id.value, author: author, message: message}));
        dispatch(robotAnswer(author));*/
        console.log('yyy');
    };
    //
    return (
        <>
            <br/>
            <Box component="form" onSubmit={(e) => registrationHandler(e, 0)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
                <TextField
                    helperText="Введите логин"
                    id="login"
                    label="Login"
                    onChange={handleEmailChange}
                    value={email}
                /><br/>
                <TextField
                    helperText="Введите пароль"
                    id="password"
                    label="Password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Зарегистрироваться
                </Button>
            </Box>            
        </>  
    );
}
export {Registration};