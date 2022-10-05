import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addData } from '../pages/features/pages/apiSlice';
import Button from '@mui/material/Button';

function fetchAsyncData() {
    return async (dispatch) => {
        const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${Math.floor((Math.random() * (10 +1)))}`)
            .then(result => {
                if (!result.ok)
                    throw new Error(result.status);
                return result.json(); 
            })
            .catch(e => console.log(e));
        //
        if (result.hasOwnProperty('results'))
            result.results.forEach(item => {
                dispatch(addData({name: item.name}));
            });
    } 
  }

export default function CustomApi() {
    const dispatch = useDispatch();
    const addDataHandler = (event) => {
        dispatch(fetchAsyncData());
    };
    console.log(useSelector((state) => state));//вывод значений стора
    //
    return (
        <Button
            onClick={(e) => addDataHandler(e)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Загрузить данные
        </Button> 
    );
}