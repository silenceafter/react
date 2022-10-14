import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { firebase_app } from '../services/firebase.js';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import CustomLoginForm from '../components/CustomLoginForm';
import CustomRegistrationForm from '../components/CustomRegistrationForm';
import { getAuthed } from '../store/authedSelectors';

const Auth = () => {
    const authed = useSelector(getAuthed, shallowEqual);
    //
    if (authed) {
        return (
          <Link to="/logout">Logout</Link>
        );
      } else {
          return (
            <>
              <Link to="/registration">Registration</Link>
              <Link to="/login">Login</Link>
            </>
          );
      }


    /*return (
        <>
            <br/>
            <CustomLoginForm/>
        </>  
    );*/
}

const CustomRegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authed = useSelector(getAuthed, shallowEqual);
    //
    const registrationHandler = (event) => {
        event.preventDefault();
        const auth = getAuth(firebase_app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //create
                onAuthStateChanged(auth, (user) => 
                    user 
                        ? dispatch(updateAuthed(true)) 
                        : dispatch(updateAuthed(false))
                );

                //редирект
                if (!authed)
                    return navigate("/");
            })
            .catch(error => console.log(error.message));
        console.log(auth);
    };
    //
    return (
        <>
            <br/>
            <Box component="form" onSubmit={(e) => registrationHandler(e)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
                <TextField
                    helperText="Введите логин"
                    id="login"
                    label="Login"
                    onChange={handleEmailChange}
                    value={email}
                /><br/>
                <TextField
                    helperText="Введите пароль"
                    id="password"
                    label="Password"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Зарегистрироваться
                </Button>
            </Box>            
        </>  
    );
};

const CustomLoginForm = () => {
    const [email, setEmail] = useState('');
    const [robotAnswer, setRobotAnswer] = useState('');
    //
    const updateEmail = value => {
        if (typeof value === 'undefined')
            return;
        //
        setEmail(value);
    };

    const updateRobotAnswer = value => {
        if (typeof value === 'undefined')
            return;
        //
        setRobotAnswer(value);
    };
    //
    const dispatch = useDispatch();
    const loginHandler = (event) => {
        event.preventDefault();
        //
        let email = GetValue(event.currentTarget, 'login');
        let password = GetValue(event.currentTarget, 'password');
        //
        if (typeof email === 'boolean' || typeof password === 'boolean')
            return;

        updateEmail(email);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                dispatch(updateAuthed(userCredential.user ? true : false));
                updateRobotAnswer(`Вход: ${email}`);            
            })
            .catch(error => {
                dispatch(updateAuthed(false));
                console.log(error.message);
            });
    };
    console.log(useSelector((state) => state));//вывод значений стора
    //
    return (
        <Box component="form" onSubmit={(e) => loginHandler(e)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>
            <TextField
                helperText="Введите логин"
                id="login"
                label="Login"
            /><br/>
            <TextField
                helperText="Введите пароль"
                id="password"
                label="Password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Войти
            </Button>
            <br/>
            <p><i>{ robotAnswer }</i></p>
        </Box>
    );
};

const CustomLogoutForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //
    const authed = useSelector(getAuthed, shallowEqual);
    //
    const logoutHandler = (event) => {
        event.preventDefault();
        const auth = getAuth(firebase_app);
        signOut(auth)
            .then((userCredential) => {
                //out
                onAuthStateChanged(auth, (user) => 
                    user 
                        ? dispatch(updateAuthed(true)) 
                        : dispatch(updateAuthed(false))
                );

                //редирект
                if (!authed)
                    return navigate("/");
            })
            .catch(error => console.log(error.message));
        console.log(auth);
    };
    //
    return (
        <>
            <Box component="form" onSubmit={(e) => logoutHandler(e, 0)} noValidate sx={{ mt: 1, overflow: 'auto', maxHeight: '20rem' }}>                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Выйти
                </Button>
            </Box>            
        </>  
    );
};

function GetValue(array, value) {
    for(let item of array) {        
        if (item.hasAttribute('id')) {
            if (item.id.trim() == value.trim())
                return item.value.trim();
        }
    }
    return false;
}
export {Auth};