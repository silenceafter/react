import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAuthed } from '../pages/features/pages/authedSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {   
    const [email, setEmail] = useState('');
    const [robotAnswer, setRobotAnswer] = useState('');
    //
    const updateEmail = value => {
        if (typeof value === 'undefined')
            return;
        //
        setEmail(value);
    };

    const updateRobotAnswer = value => {
        if (typeof value === 'undefined')
            return;
        //
        setRobotAnswer(value);
    };
    //
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //
    const loginHandler = (event) => {
        event.preventDefault();
        //
        let email = GetValue(event.currentTarget, 'login');
        let password = GetValue(event.currentTarget, 'password');
        //
        if (typeof email === 'boolean' || typeof password === 'boolean')
            return;
        updateEmail(email);
        //
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                if (userCredential.user) {
                    dispatch(updateAuthed(true));
                    updateRobotAnswer(`Вход: ${email}`);                                                    
                    return navigate("/");//редирект
                }                                
            })
            .catch(error => {
                dispatch(updateAuthed(false));
                console.log(error.message);
                updateRobotAnswer(`Пользователь "${email}" не найден`);
            });     
    };
    console.log(useSelector((state) => state));//вывод значений стора
    //
    return (
        <Box component="form" onSubmit={(e) => loginHandler(e)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
            <TextField
                helperText="Введите логин"
                id="login"
                label="Login"
            /><br/>
            <TextField
                helperText="Введите пароль"
                id="password"
                label="Password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Войти
            </Button>
            <br/>
            <p><i>{ robotAnswer }</i></p>
        </Box>
    );
};

function GetValue(array, value) {
    for(let item of array) {        
        if (item.hasAttribute('id')) {
            if (item.id.trim() == value.trim())
                return item.value.trim();
        }
    }
    return false;
}
export {Login};