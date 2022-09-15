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

const UserContext = React.createContext(null);
function App() {
  const [chatList, setChatList] = useState([]);
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
  //
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={{chatList: chatList, updateChatList: updateChatList}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="chats/:chatId" element={<Chats />}/>
                <Route
                    path="*"
                    element={<Navigate to="/chats/:chatId" replace />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </header>
    </div>
  );
}

function Page() {
  return (
    <p>page</p>
  );
}

function Home() {
  const chat = useContext(UserContext);
  //const [messageList, setMessageList] = useState([]);
  /*const [robotAnswer, setRobotAnswer] = useState('');
  const firstName = useRef(null);

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
  }, [messageList]);*/
  //
  return (    
    <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
      <Box display="flex" flexDirection="row" alignItems="stretch" padding={1}>
        {
          <Box sx={{ border: 1, width: '100%', bgcolor: 'background.paper' }}>
            <List sx={{width: '10rem'}}>
            {
              chat.chatList.map((element, index) => {
                return (       
                  <Link to={`/chats/${element.id}`} style={{textDecoration: 'none'}}>
                  <ListItem button key={element.id}>
                    <ListItemText sx={{textAlign: 'center'}} primary={element.name}/>
                  </ListItem>
                  </Link>                                         
                );
              })
            } 
            </List>          
          </Box>
        }
        <Box sx={{ border: 1, width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
          <List sx={{ maxHeight: '15rem', width: '10rem', overflow: 'auto' }}>
          {              
            /*messageList.map((element, index) => {                
              return (                  
                  <ListItem button key={element.id} autoFocus={true}>
                    <ListItemText sx={{ textAlign: 'center' }} primary={'текст: ' + element.text} secondary={'сообщение: ' + element.author}/>
                  </ListItem>                  
              );
            })*/
          }
          </List>          
        </Box>          
      </Box>
      <Box component="form" noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
      </Box>
      <Button
        onClick={chat.updateChatList}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Добавить
      </Button>
    </Box>
  );
  
  //const [chatList, setChatList] = useState([]);
    /*{
      id: 1, 
      name: 'Чат_1',
      value: [messageList_1, setMessageList_1] = useState([])
    }, 
    {
      id: 2, 
      name: 'Чат_2',
      value: [messageList_2, setMessageList_2] = useState([])
    }, 
    {
      id: 3, 
      name: 'Чат_3',
      value: [messageList_3, setMessageList_3] = useState([])
    }*/
  
  /*const [messageList, setMessageList] = useState([]);
  const [robotAnswer, setRobotAnswer] = useState('');
  const firstName = useRef(null);

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
    <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
        <Box display="flex" flexDirection="row" alignItems="stretch" padding={1}>
          {
            <Box sx={{ border: 1, width: '100%', bgcolor: 'background.paper' }}>
              <List>
              {
                chatList.map((element, index) => {
                  return (                    
                    <ListItem button>
                      <ListItemText sx={{textAlign: 'center'}} primary={'название: ' + element.name}/>
                    </ListItem>                                          
                  );
                })
              } 
              </List>               
            </Box>
          }
          <Box sx={{ border: 1, width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
            <List sx={{ maxHeight: '15rem', overflow: 'auto' }}>
            {              
              messageList.map((element, index) => {                
                return (                  
                    <ListItem button autoFocus={true}>
                      <ListItemText sx={{ textAlign: 'center' }} primary={'текст: ' + element.text} secondary={'сообщение: ' + element.author}/>
                    </ListItem>                  
                );
              })              
            }
            </List>
          </Box>
          
        </Box>
        <Box component="form" onSubmit={updateMessageList} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
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
            <p><i>{robotAnswer}</i></p>
        </Box>
      </Box>
  );*/
}

function Profile() {
  return (
    <p>profile</p>
  );
}

function Chats() {
  let params = useParams();
  //let location = useLocation();
  return (
    <p>{params.id}</p>
  );
}

export default App;
