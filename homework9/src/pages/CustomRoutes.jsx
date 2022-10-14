import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const CustomRoutes = () => {
    return (
        <div>
            <>
            <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>               
                <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
                    <Link to="/registration">Registration</Link>
                    <Link to="/login">Login</Link>
                </Box>               
            </Box>
            </>            
        </div>
    );
};

export {CustomRoutes};
/*
<Link to="/registration">Registration</Link>
<Link to="/login">Login</Link>
*/