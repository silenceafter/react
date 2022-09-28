import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import AddChatButton from '../components/AddChatButton.js';
import DeleteChatButton from '../components/DeleteChatButton.js';
import CustomMessageForm from '../components/CustomMessageForm.js';
import CustomRobotAnswer from '../components/CustomRobotAnswer.js';
import { getChats } from '../store/chatsSelectors.js';
import { getMessages } from '../store/messagesSelectors.js';

const Chats = (props) => {
    const id = useParams();
    const navigate = useNavigate();
    const chats = useSelector(getChats, shallowEqual);//((state) => state.chats);
    const messages = useSelector(getMessages, shallowEqual);//((state) => state.messages);
    //
    useEffect(() => {
        //эта часть бесполезна, т.к. роутер очищает все стейты в App.js при запросе 
        //страницы через адресную строку браузера
        if (id.hasOwnProperty('id')) {            
            let find = false;
            for(let chat of chats) {
                if (chat.id === parseInt(id.id)) {
                    find = true;
                    break;
                }                    
            }
            //
            if (!find)
                return navigate("/NotFound");
        }        
    }, [chats]);
    //
    return (
        <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
            <Box display="flex" flexDirection="row" alignItems="stretch" padding={1}>
                {
                <Box sx={{ border: 1, width: '100%', bgcolor: 'background.paper' }}>
                    <List sx={{width: '20rem'}}>
                    {                        
                        chats.map((element, index) => {
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
                            messages.map((element, index) => {
                                if (id.id == element.chat) {
                                    return (                  
                                        <ListItem button key={element.id} autoFocus={true}>
                                            <ListItemText sx={{ textAlign: 'center' }} primary={'сообщение: ' + element.message} secondary={'автор: ' + element.author}/>
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
        <>
        <CustomMessageForm value={props.value.id}/>
        <CustomRobotAnswer/>
        </>
    );
};

export {Chats};