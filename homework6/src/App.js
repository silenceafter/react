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
  const [chatList, setChatList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [robotAnswer, setRobotAnswer] = useState('');
  const [messageCount, setMessageCount] = useState(1);
  //
  const chatRef = useRef(null);
  const firstName = useRef(null);
  //
  const updateChatList = () => {
    setChatList(current => [...current,
        {
          id: chatList.length + 1, 
          name: `Чат_${chatList.length + 1}`,
          messageList: []
        }
      ]
    );
  };

  const removeChatList = () => {
    const copyArray = [...chatList];
    copyArray.splice(-1);
    setChatList(copyArray);
  };

  const updateMessageList = chat => event => {
    if (typeof event === 'undefined' ||
      typeof chat === 'undefined')
      return;
    updateMessageCount();
    //
    if (event.hasOwnProperty('currentTarget')) {
      //новая запись
      const formData = new FormData(event.currentTarget);
      let author = '',
        message = '';
      //
      for(let [key, value] of formData.entries()) {
        //message
        if (key.trim().toLowerCase() === 'message')
          message = value;

        //author
        if (key.trim().toLowerCase() === 'author')
          author = value;
      }
      setMessageList((current) => [...current, {id: messageCount, chat: chat, text: message, author: author}]);
    };
    firstName.current.focus();
    event.preventDefault();
  };

  const updateRobotAnswer = record => {
    if (record != null)
      setRobotAnswer(`Добавлено сообщение пользователя "${record.author.trim().toLowerCase()}"`);
  };

  const updateMessageCount = () => {
    setMessageCount(current => ++current);
  };

  /*const initialState = {
    showName: false,
    name: 'Default'
  }

  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case EXAMPLE_ACTION:
        return {
          ...state,
          showName: !state.showName
        };
        default:
          return state;
    }
  }*/

  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => {
        updateRobotAnswer(messageList[messageList.length - 1]);
      }, 1500);
    }
  }, [messageList]);

  let data = {
    chatList: chatList, 
    messageList: messageList,
    robotAnswer: robotAnswer,
    updateChatList: updateChatList,
    removeChatList: removeChatList,
    updateMessageList: updateMessageList,
    updateRobotAnswer: updateRobotAnswer,
    chatRef: chatRef
  };
  //
  return (
    <>
      <div className="App">      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/chats" element={<Chats value={data}/>}>
              <Route path=":id" element={<Chats value={data}/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Route>          
        </Routes>
      </div>
    </>
  );
}

export default App;
