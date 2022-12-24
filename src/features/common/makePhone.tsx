// @flow
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import * as React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { CpuReq, Speeds } from '../../models/cpu';
import { PhoneReq } from '../../models/phone';
import { phoneActions } from '../redux-saga/phone/phoneSlice';
import FormControl from '@mui/material/FormControl';
import MakeBattery from './makeBattery';
import MakeConnect from './makeConnect';
import MakeCamera from './makeCamera';
import MakeScreen from './makeScreen';
import BasePhone from './basePhone';
import MakeCpu from './makeCpu';

export default function MakePhone() {

  const dispatch = useAppDispatch()

  // const [value, setValue] = React.useState<Dayjs | null>(null);


  const [isNewGpu, setIsNewGpu] = React.useState(false)

  const [phoneDto, setPhoneDto] = React.useState<PhoneReq>({
    id: null,
    name: "",
    dateAt: "",
    dimensions: "",
    operation: "",
    price: "",
    weigh: "",
  })

  const [cpu, setCpu] = React.useState<CpuReq>({
    id: null,
    name: "",
    cached: '',
    core: '',
    fastest: '',
    speeds: [],
    thread: '',
  })


  const [gpuName, setGpuName] = React.useState<string>('');

  const handleChangeInputGpuName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGpuName(e.target.value)
    console.log("GPU name: ", gpuName)
  }

  const handleChangeInputText =  (event: React.ChangeEvent<HTMLInputElement>) => {

    const {name, value} = event.target
    setPhoneDto({...phoneDto, [name]: value})
    
  }

  const handleClickMake = () => {
    
    console.log("send data: ", phoneDto)
    dispatch(phoneActions.makeNewPhone(phoneDto))

  }



  const handleNewGpu = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNewGpu(event.target.checked)
  }

  const handleCloseFormGPu = () => {
    setIsNewGpu(false)
  }
  // const handleChangeSpecCpu = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("CPU specifications: ", cpu)
  //   const {value, name} = event.target
  //   setCpu({...cpu, [name]: value})
  // }

  // const handleVerifyCpu = () => {

  //   setIsNewCpu(false)

  //   console.log("Single core: ", singleCore)
  //   console.log("Multiple core: ", multipleCore)

  //   const cpuVales = {...cpu}
  //   const speedsValue:Speeds[] = [
  //     {numberCores: 'Đơn nhân', performance: singleCore},
  //     {numberCores: 'Đa nhân', performance: multipleCore}
  //   ]
  //   cpuVales.speeds.push(...speedsValue)
  //   setCpu(cpuVales)
  //   console.log("CPU new information: ", cpu)
  // }

  return (

    <>  
      <BasePhone />

      <MakeCpu />
      
      <div className="container-gpu">
        <h5>Chip xử lý đồ họa (GPU)</h5>
        <span>Nếu chưa tồn tại hãy tạo mới </span>
         
        {/* Tạo mới GPU */}
        <FormControlLabel control={
          <Checkbox id='isNew-gpu'
            checked={isNewGpu}
            onChange={handleNewGpu}
          />}
          label="Tạo mới"
        />

        <div>
          <Dialog open={isNewGpu} onClose={handleCloseFormGPu}>
            <DialogTitle>Thêm một GPU mới</DialogTitle>
            <DialogContent>
              <Box
                component='form'
                noValidate
                autoComplete='off'
              >
                <TextField id='' label='Tên GPU' variant='outlined' sx={{marginTop: 2}} 
                  name='gpuName'
                  value={gpuName}
                  onChange={handleChangeInputGpuName}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseFormGPu}>Hủy</Button>
              <Button >Xác nhận</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
        
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