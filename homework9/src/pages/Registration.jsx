import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { firebase_app } from '../services/firebase.js';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAuthed } from '../store/authedSelectors';
import { useNavigate } from "react-router-dom";
import { updateAuthed } from '../pages/features/pages/authedSlice';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authed = useSelector(getAuthed, shallowEqual);
    //
    const registrationHandler = (event) => {
        event.preventDefault();
        const auth = getAuth(firebase_app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //create
                onAuthStateChanged(auth, (user) => 
                    user 
                        ? dispatch(updateAuthed(true)) 
                        : dispatch(updateAuthed(false))
                );

                //редирект
                if (authed)//!
                    return navigate("/");
            })
            .catch(error => console.log(error.message));        
    };
    console.log(useSelector((state) => state));//вывод значений стора
    //
    return (
        <>
            <br/>
            <Box component="form" onSubmit={(e) => registrationHandler(e)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
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
};
export {Registration};