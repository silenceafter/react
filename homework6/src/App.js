import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState, useContext } from 'react';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useParams,
  Outlet,
  Navigate
} from "react-router-dom";
import { Home } from './pages/Home';
import { Chats } from './pages/Chats';
import { Profile} from './pages/Profile';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <div className="App">      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/chats" element={<Chats/>}>
              <Route path=":id" element={<Chats/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Route>          
        </Routes>
      </div>
    </>
  );
}

export default App;
