import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getApis } from '../store/apiSelectors';
import CustomApi from '../components/CustomApi';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Api = () => {
    const store_api = useSelector(getApis, shallowEqual);
    //
    return (
        <div>
            Page Api<br/>
            <Box sx={{ border: 1, width: '100%', bgcolor: 'background.paper' }}>
                <List sx={{width: '20rem'}}>
                {                        
                    store_api.map((element, index) => {
                    return (                         
                        <ListItem button key={index.toString()}>
                            <ListItemText sx={{textAlign: 'center'}} primary={`${element.id}. ${element.name}`}/>
                        </ListItem>               
                    );
                })
                } 
                </List>
            </Box>
            <CustomApi/>
        </div>
    );
}
export {Api};