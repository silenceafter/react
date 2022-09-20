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
  useNavigate,
  Outlet,
  Navigate
} from "react-router-dom";

const ChatSinglepage = (props) => {
    const id = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (props.value.chatList.length == 0)
            return navigate("/NotFound");
    }, [props.value.chatList]);
    //
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
                            if (id.id == element.chat) {
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
            <Box component="form" onSubmit={props.value.updateMessageList(id.id)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
                <TextField
                    inputRef = {props.value.firstName}
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
                    Добавить сообщение
                </Button>                      
                <p><i>{props.value.robotAnswer}</i></p>
            </Box>            
        </Box>
    );
}

export {ChatSinglepage};
