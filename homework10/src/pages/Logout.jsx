import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { firebase_app } from '../services/firebase.js';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { updateAuthed } from '../pages/features/pages/authedSlice';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //
    const logoutHandler = (event) => {
        event.preventDefault();
        const auth = getAuth(firebase_app);
        signOut(auth)
            .then((userCredential) => {
                //out
                let authed = false;
                onAuthStateChanged(auth, (user) => 
                    user
                        ? authed = true 
                        : authed = false
                );
                dispatch(updateAuthed(authed));
                
                //редирект
                if (!authed)
                    return navigate("/");
                throw new Error("Ошибка logout");
            })
            .catch(error => console.log(error.message));
    };
    console.log(useSelector((state) => state));//вывод значений стора
    //
    return (
        <>
            <Box component="form" onSubmit={(e) => logoutHandler(e, 0)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Выйти
                </Button>
            </Box>            
        </>  
    );
};
export {Logout};