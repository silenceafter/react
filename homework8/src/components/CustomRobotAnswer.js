import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer } from '../pages/features/pages/robotSlice';
import Button from '@mui/material/Button';

export default function CustomRobotAnswer() {
  const robotAnswers = useSelector((state) => state.robot);
  let answer = '';
  if (robotAnswers.length > 0) {
    if (robotAnswers[robotAnswers.length - 1].hasOwnProperty('value'))
        answer = robotAnswers[robotAnswers.length - 1].value;
  }
  //
  return (
    <p><i>{answer}</i></p>
  );
}