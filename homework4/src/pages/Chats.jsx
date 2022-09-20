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

const Chats = (props) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
            <Box display="flex" flexDirection="row" alignItems="stretch" padding={1}>
                {
                <Box sx={{ border: 1, width: '100%', bgcolor: 'background.paper' }}>
                    <List ref={props.value.chatRef} sx={{width: '20rem'}}>
                    {
                    props.value.chatList.map((element, index) => {
                        return (                         
                        <Link to={`/chats/${element.id}`} style={{textDecoration: 'none'}}>
                        <ListItem button key={index.toString()}>
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
                    <List sx={{ maxHeight: '15rem', width: '20rem', overflow: 'auto' }}>
                        {           
                            props.value.messageList.map((element, index) => {
                                if (element.chat == 1) {
                                    return (                  
                                        <ListItem button key={element.id} autoFocus={true}>
                                            <ListItemText sx={{ textAlign: 'center' }} primary={'текст: ' + element.text} secondary={'сообщение: ' + element.author}/>
                                        </ListItem>                  
                                    );    
                                }
                            })
                        }
                    </List>
                </Box>          
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
            <Button
                onClick={props.value.removeChatList}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Удалить чат
            </Button>
        </Box>
    );
}

export {Chats};