import React, { useState } from 'react';
//import { shallowEqual, useSelector } from 'react-redux';
//import { getProfile } from '../store/profileSelectors.js';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { firebase_app } from '../services/firebase.js';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import CustomLoginForm from '../components/CustomLoginForm';

const Login = () => {
    /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const loginHandler = (event, id) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //create
                const user = userCredential.user;
            })
            .catch(error => console.log(error.message));
    };*/
    return (
        <>
            <br/>
            <CustomLoginForm/>
        </>  
    );
}
export {Login};