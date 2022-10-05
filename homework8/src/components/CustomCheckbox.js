import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCheckbox } from '../pages/features/pages/profileSlice';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CustomCheckbox() {
  const [value, setValue] = useState(false);
  const dispatch = useDispatch();
  //
  const updateCheckboxHandler = (event) => {
    dispatch(updateCheckbox(event.target.checked));
    setValue(event.target.checked);
  };
  console.log(useSelector((state) => state));//вывод значений стора
  //
  return (
    <FormControlLabel
      label="Checkbox Value"
      control={<Checkbox checked={value} onChange={(e) => updateCheckboxHandler(e)} />}
    />
  );
}