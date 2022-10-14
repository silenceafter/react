import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { firebase_app } from '../services/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Auth() {
  const [authed, setAuthed] = useState(false);
  //
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => user ? setAuthed(true) : setAuthed(false));
  }, []);
  //
  if (authed) {
    return (
      <Link to="/logout">Logout</Link>
    );
  } else {
      return (
        <>
          <Link to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
        </>
      );
  }
}