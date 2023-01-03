// @flow
import Button from '@mui/material/Button';
import * as React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { PhoneReq } from '../../models/phone';
import { phoneActions } from '../redux-saga/phone/phoneSlice';
import BasePhone from './basePhone';
import MakeBattery from './makeBattery';
import MakeCamera from './makeCamera';
import MakeConnect from './makeConnect';
import MakeCpu from './makeCpu';
import MakeGpu from './makeGpu';
import MakeScreen from './makeScreen';
import ImgPhone from './imgPhone';

export default function MakePhone() {

  return (

    <>  
      <BasePhone />

      <MakeCpu />
      
      <MakeGpu />
        
      <MakeBattery />

      <MakeConnect />
      
      <MakeCamera />

      <MakeScreen />
      
      <ImgPhone />
    </>
  );
};