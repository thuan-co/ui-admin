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

export default function MakePhone() {

  const dispatch = useAppDispatch()

  // const [value, setValue] = React.useState<Dayjs | null>(null);


  const [phoneDto, setPhoneDto] = React.useState<PhoneReq>({
    id: null,
    name: "",
    dateAt: "",
    dimensions: "",
    operation: "",
    price: "",
    weigh: "",
  })

  const handleClickMake = () => {
    
    console.log("send data: ", phoneDto)
    dispatch(phoneActions.makeNewPhone(phoneDto))

  }
  return (

    <>  
      <BasePhone />

      <MakeCpu />
      
      <MakeGpu />
        
      <MakeBattery />

      <MakeConnect />
      
      <MakeCamera />

      <MakeScreen />
      <div> 
        <Button variant="contained" onClick={handleClickMake}>Tạo mới</Button>
      </div>
    </>
  );
};