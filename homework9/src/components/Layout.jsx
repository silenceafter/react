import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const Layout = () => {
    return (
        <div>
            <>
            <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
                <header className="App-header">                
                    <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
                        <Link to="/">Home</Link>
                        <Link to="/chats">Chats</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/api">Api</Link> 
                        <Link to="/registration">Registration</Link>
                    </Box>
                </header>
                <main className="App-main">
                    <Outlet/>
                </main>            
                <footer className="App-footer">
                    2022
                </footer>
            </Box>
            </>            
        </div>
    );
};

export {Layout};