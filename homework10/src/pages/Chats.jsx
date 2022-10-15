import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import AddChatButton from '../components/AddChatButton.js';
import DeleteChatButton from '../components/DeleteChatButton.js';
import CustomMessageForm from '../components/CustomMessageForm.js';
import CustomRobotAnswer from '../components/CustomRobotAnswer.js';
import { getChats } from '../store/chatsSelectors.js';
import { getMessages } from '../store/messagesSelectors.js';
import { getAuthed } from '../store/authedSelectors.js';
import { firebase_app } from '../services/firebase.js';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const Chats = (props) => {
    const id = useParams();
    const navigate = useNavigate();
    const [chats, setChats] = useState([]);//const chats = useSelector(getChats, shallowEqual);
    const messages = useSelector(getMessages, shallowEqual);
    const authed = useSelector(state => state.authed);
    //
    useEffect(() => {
        //проверка доступа
        if (!authed)
            return navigate("/Login");

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

        //загрузка данных из БД
        const db = getDatabase();
        const auth = getAuth();
        //
        if (auth == null) 
            throw new Error('auth не найден');
        if (!auth.hasOwnProperty('currentUser'))
            throw new Error('auth.currentUser не найдено');
        
        const db_ref = ref(db, 'chats');
        onValue(db_ref, (snapshot) => setChats(snapshot.val()));
    }, [chats]);

    //загрузка данных из БД
    /*let email = '';
    const db = getDatabase();
    const auth = getAuth();
    //
    if (auth == null) 
        throw new Error('auth не найден');
    if (!auth.hasOwnProperty('currentUser'))
        throw new Error('auth.currentUser не найдено');
    
    const myread = ref(db, 'chats');
    onValue(myread, (snapshot) => {
        const data = snapshot.val();
        setChats(data);
    })
    console.log(chats);*/
    /*email = auth.currentUser.email;
    if (email.trim() != '') {
        /*set(ref(db, 'chats/1'), {
            email: email,
            id: '1',
            name: `Чат_1`,
            messages: {}
        });*/
    /*    const myread = ref(db, 'chats');
        onValue(myread, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        })
    }*/
    //
    if (authed) {
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
    } else {
        return (
            <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}></Box>
        );
    }
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