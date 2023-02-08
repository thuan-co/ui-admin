// @flow
import * as React from 'react';
import MakePhone from '../features/common/makePhone';
import './index.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { PhoneReq } from '../models';
import { phoneActions } from '../features/redux-saga/phone/phoneSlice';
import { Button } from '@mui/material';
import { RootState } from '../app/store';
import { UpdatePhoneDto, updatingPhoneActions } from '../features/redux-saga/phone/updateSlice';

export function MakeProduct() {

  const dispatch = useAppDispatch()


  const selector = useAppSelector((state:RootState)=>state)



  const handleClickMake = () => {
    
    // if (selector.cpu.id !== null) {
    //   dispatch(updatingPhoneActions.updatingCpuForPhone(selector.cpu.id))
      
    // }
    // if (selector.gpu.id !== null) {
    //   dispatch(updatingPhoneActions.updatingGpuForPhone(selector.gpu.id))
    // }
    const phoneDto:UpdatePhoneDto = selector.update_phone
    dispatch(updatingPhoneActions.updatingPhone(phoneDto))
  }

  // React.useEffect(()=>{
  //   if (isClicked.current) {
  //     isClicked.current = false

  //   }
  // }, [isClicked])
  return (
    <section className='make-products-container'>

      <MakePhone />
      
      <div> 
        <Button variant="contained" onClick={handleClickMake}>Tạo mới</Button>
      </div>
    </section>
  );
};