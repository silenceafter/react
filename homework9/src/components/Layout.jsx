import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import { firebase_app } from '../services/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Auth from './Auth';

const Layout = () => {
    return (
        <div>
            <>
            <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
                <header className="App-header">                
                    <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
                        <Link to="/">Home</Link>
                        <Link to="/chats">Chats</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/api">Api</Link>
                        <Auth />
                    </Box>
                </header>
                <main className="App-main">
                    <Outlet/>
                </main>            
                <footer className="App-footer">
                    2022
                </footer>
            </Box>
            </>            
        </div>
    );
};

export {Layout};
/*
<Link to="/registration">Registration</Link>
<Link to="/login">Login</Link>
*/