import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import AddChatButton from '../components/AddChatButton.js';
import DeleteChatButton from '../components/DeleteChatButton.js';
import { useDispatch, useSelector } from 'react-redux';

const Chats = (props) => {
    const id = useParams();
    const navigate = useNavigate();
    const chats = useSelector((state) => state.chats);
    //
    useEffect(() => {
        //эта часть бесполезна, т.к. роутер очищает все стейты в App.js при запросе 
        //страницы через адресную строку браузера
        if (id.hasOwnProperty('id')) {            
            let find = false;
            for(let chat of props.value.chatList) {
                if (chat.id === parseInt(id.id)) {
                    find = true;
                    break;
                }                    
            }
            //
            if (!find)
                return navigate("/NotFound");
        }        
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
            { 
                id.hasOwnProperty('id') 
                    ? <MessageForm value={{props: props.value, id: id.id}}/> 
                    : <ChatForm value={{props: props.value, id: id.id}} />
            }
        </Box>
    );
};

const ChatForm = (props) => {
    return (
        <Box component="form" noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>            
            <AddChatButton/>            
            <DeleteChatButton/>
        </Box>
    );
};

const MessageForm = (props) => {
    return (        
        <Box component="form" onSubmit={props.value.props.updateMessageList(props.value.id)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
                <TextField
                    inputRef = {props.value.props.firstName}
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
                <p><i>{props.value.props.robotAnswer}</i></p>
            </Box>
    );
};

export {Chats};