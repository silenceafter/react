import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [chatList, setChatList] = useState([
    {
      id: 1, 
      name: 'Чат1'
    }, 
    {
      id: 2, 
      name: 'Чат2'
    }, 
    {
      id: 3, 
      name: 'Чат3'
    }
  ]);

  const [messageList, setMessageList] = useState([]);
  const [robotAnswer, setRobotAnswer] = useState('');
  const firstName = useRef(null);
  //
  const updateChatList = event => {

  };

  const updateMessageList = event => {
    if (typeof event === 'undefined')
      return;
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
      setMessageList(current => [...current, {text: message, author: author}]);
    };
    firstName.current.focus();
    event.preventDefault();
  };
  const updateRobotAnswer = record => {
    if (record != null)
      setRobotAnswer(`Добавлено сообщение пользователя "${record.author.trim().toLowerCase()}"`);
  };
  useEffect(() => {
    if (messageList.length > 0) {
      setTimeout(() => {
        updateRobotAnswer(messageList[messageList.length - 1]);
    }, 1500);
    }
  }, [messageList]);
  //
  return (
    <div className="App">
      <header className="App-header">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {
            <div>
            {
              chatList.map((element, index) => {
                return (
                  <div key={index}>
                    <h2>id: {element.id}, название: {element.name}</h2>
                  </div>
                );
              })
            }
          </div>
          }

          <Box component="form" onSubmit={updateMessageList} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={event => updateMessageList}
              inputRef = {firstName}
              margin="normal"
              required
              fullWidth
              id="textfield_author"
              label="Author"
              variant="filled"
              name="author"
              autoComplete="author"
              autoFocus
            />
            <TextField
              onChange={event => updateMessageList}
              margin="normal"
              required
              fullWidth
              id="textfield_message"
              label="Message"
              variant="filled"
              name="message"
              autoComplete="message"
            />
            <Button
              type="submit"              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Отправить
            </Button>
          </Box>
        </Container>
        {
          <div>
            {
              messageList.map((element, index) => {
                return (
                  <div key={index}>
                    <h2>текст: {element.text}, сообщение: {element.author}</h2>
                  </div>
                );
              })
            }
          </div>
        }
        <p><i>{robotAnswer}</i></p>
      </header>
    </div>
  );
}

export default App;
