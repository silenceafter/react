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

const Home = (props) => {
    {/*return (
        <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
            <Box display="flex" flexDirection="row" alignItems="stretch" padding={1}>
                {
                <Box sx={{ border: 1, width: '100%', bgcolor: 'background.paper' }}>
                    <List ref={props.value.chat_ref} sx={{width: '10rem'}}>
                    {
                    props.value.chatList.map((element, index) => {
                        return (                         
                        <Link to={`/chats/${element.id}`} style={{textDecoration: 'none'}}>
                        <ListItem button key={index.toString()} onClick={() => add_chat_button_click(element.id)}>
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
                {/*<List id="message_list" sx={{ maxHeight: '15rem', width: '10rem', overflow: 'auto' }}>
                                
                    /*messageList.map((element, index) => {                
                    return (                  
                        <ListItem button key={element.id} autoFocus={true}>
                            <ListItemText sx={{ textAlign: 'center' }} primary={'текст: ' + element.text} secondary={'сообщение: ' + element.author}/>
                        </ListItem>                  
                    );
                    })
                
                </List>*///}
       /*         </Box>          
            </Box>
            <Box component="form" noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
            </Box>
            <Button
                onClick={props.value.updateChatList}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Добавить чат
            </Button>
        </Box>
                );*/}
    return (
        <div></div>
    );
}

function add_chat_button_click(id) {
    /*const chat = useContext(UserContext);
    const bb = chat.chat_ref.current;
    console.log(bb);*/
}

export {Home};