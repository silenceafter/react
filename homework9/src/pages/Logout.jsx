import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { firebase_app } from '../services/firebase.js';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { updateAuthed } from '../pages/features/pages/authedSlice';
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAuthed } from '../store/authedSelectors';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //
    const authed = useSelector(getAuthed, shallowEqual);
    //
    const logoutHandler = (event) => {
        event.preventDefault();
        const auth = getAuth(firebase_app);
        signOut(auth)
            .then((userCredential) => {
                //out
                onAuthStateChanged(auth, (user) => 
                    user 
                        ? dispatch(updateAuthed(true)) 
                        : dispatch(updateAuthed(false))
                );

                //редирект
                if (!authed)
                    return navigate("/");
            })
            .catch(error => console.log(error.message));
        console.log(auth);
    };
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