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

export default function MakePhone() {
  
  const dispatch = useAppDispatch()

  const [value, setValue] = React.useState<Dayjs | null>(null);

  const [isNewCpu, setIsNewCpu] = React.useState(false);

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

  const [singleCore, setSingleCore] = React.useState<string>('')
  const [multipleCore, setMultipleCore] = React.useState<string>('')

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

  const handleCloseFormCpu = ()=> {
    setIsNewCpu(false)
    const cpuVales = {...cpu}
    cpuVales.cached = ''
    cpuVales.core = ''
    cpuVales.fastest = ''
    cpuVales.name = ''
    cpuVales.thread = ''
    // cpuVales.speeds = []
    cpuVales.fastest = ''
    setSingleCore('')
    setMultipleCore('')
    setCpu(cpuVales)
  }

  const handleNewCpu = (event: React.ChangeEvent<HTMLInputElement>) => {

    setIsNewCpu(event.target.checked);
    // console.log("Check box new cpu ",event.target.checked)
  }

  const handleNewGpu = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNewGpu(event.target.checked)
  }

  const handleCloseFormGPu = () => {
    setIsNewGpu(false)
  }
  const handleChangeSpecCpu = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("CPU specifications: ", cpu)
    const {value, name} = event.target
    setCpu({...cpu, [name]: value})
  }

  const handleVerifyCpu = () => {

    setIsNewCpu(false)

    console.log("Single core: ", singleCore)
    console.log("Multiple core: ", multipleCore)

    const cpuVales = {...cpu}
    const speedsValue:Speeds[] = [
      {numberCores: 'Đơn nhân', performance: singleCore},
      {numberCores: 'Đa nhân', performance: multipleCore}
    ]
    cpuVales.speeds.push(...speedsValue)
    setCpu(cpuVales)
    console.log("CPU new information: ", cpu)
  }

  return (

    <div>

      <h3>Thêm điện thoại</h3>

      <div className='base-info-phone'>

        <h4>Thông tin cơ bản</h4>
        <Box
          component="form"
          sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="" label="Tên" variant="outlined" 
            name='name' value={phoneDto.name}
            onChange={handleChangeInputText}
          />

          <TextField id="" label="Hệ điều hành" variant="outlined" 
            name='operation' 
            value={phoneDto.operation}
            onChange={handleChangeInputText}
          /> 

          <TextField id="input-weigh" label="Khối lượng" variant="outlined" 
            name='weigh' value={phoneDto.weigh}
            type='number'
            InputProps={{
              endAdornment: <InputAdornment position='end'>g or kg</InputAdornment> 
            }}
            onChange={handleChangeInputText}
          />

          <TextField id="" label="Giá" variant="outlined" 
            name='price' value={phoneDto.price}
            type='number'
            InputProps={{
              // startAdornment: <InputAdornment position="start">kg</InputAdornment>,
              endAdornment: <InputAdornment position='end'>VNĐ</InputAdornment>
            }}
            onChange={handleChangeInputText}
          />

          <TextField id="" label="Kích thước" variant="outlined" 
            name='dimensions' value={phoneDto.dimensions}
            onChange={handleChangeInputText}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
              // views={['day', 'month', 'year']}
              
              label="Ngày ra mắt"
              value={value}
              onChange={(value) => {
                let date = value?.format('YYYY-MM-DD');
                // const {name, value} = value
                setPhoneDto({...phoneDto, dateAt: date})
                setValue(value)
                console.log("Ngày ra mắt ", phoneDto.dateAt)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
        </Box>
      </div>
      
      <div className="container-cpu">
        <h5>Bộ vi xử lý (CPU)</h5>
        <span>Nếu chưa tồn tại hãy tạo mới </span>

        {/* Tạo mới CPU */}
        <FormControlLabel control={
          <Checkbox id='isNew-cpu'
            checked={isNewCpu}
            onChange={handleNewCpu}
          />}
          label="Tạo mới"
        />
        
        <div className='selected-cpu-container'>  
          
          <Box>
            <FormControl>
              <InputLabel id='cpu-selection-label'>CPU</InputLabel>
              <Select
                id='cpu-selection'
                labelId='cpu-selection-label'
                label='CPU'
                // name='cpuName'
                sx = {{width: 200}}
                disabled={true}
              >
                <MenuItem >Ten</MenuItem>
                <MenuItem >Twenty</MenuItem>
                <MenuItem >Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div>  
          <Dialog open={isNewCpu} onClose={handleCloseFormCpu}>

            <DialogTitle>Thêm một CPU mới</DialogTitle>

            <DialogContent className='form-create-cpu'>

              <TextField id="" label="Tên" variant="outlined" 
                fullWidth
                name='name'
                value={cpu.name}
                onChange={handleChangeSpecCpu}
                // sx={{width: 100}}
              />
              <div className='spec-cpu-contain'>
                <TextField id="" label="Core" variant="outlined"
                  type='number' 
                  inputProps={{ 
                    inputMode: 'numeric',
                    step: 1,  
                    min: 0,
                    max: 100,
                  }}
                  name='core'
                  value={cpu.core}
                  onChange={handleChangeSpecCpu}
                  sx={{width: 80}}
                />
                <TextField id="" label="Thread" variant="outlined"
                    type='number'
                    inputProps={{ 
                      inputMode: 'numeric',
                      step: 1,  
                      min: 0,
                      max: 100,
                    }}
                    name='thread'
                    value={cpu.thread}
                    onChange={handleChangeSpecCpu}
                    sx={{width: 80}}
                />
                <TextField id="" label="Cached" variant="outlined" 
                  type='number'
                  inputProps={{ 
                    inputMode: 'decimal',
                    min: 0.0,
                    // max: 100,
                  }}
                  name='cached'
                  value={cpu.cached}
                  onChange={handleChangeSpecCpu}
                  sx={{width: 80}}
                />
                <TextField id="" label="Turbo" variant="outlined"
                  type='number'
                  inputProps={{ 
                    inputMode: 'decimal',
                    min: 0,
                  }}
                  name='fastest'
                  value={cpu.fastest}
                  onChange={handleChangeSpecCpu}
                  sx={{width: 80}}
                />
              </div>

              <div>
                <span>Tốc độ xử lý</span>
              </div>
              <div className='adding-speeds-cpu' >
                <div className='list-input-speeds'>
                  <TextField id='' variant='outlined'
                    // type='number' 
                    sx={{width:200, paddingRight: 2}}
                    // name='numberCores'
                    placeholder='Đơn nhân'
                    disabled={true}               
                  />
                  <TextField id='' label='Tốc độ' variant='outlined'
                    type='text' 
                    sx={{width: 100}} 
                    name='singleCore'
                    value={singleCore}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setSingleCore(event.target.value)
                    }}
                  />                
                </div>
                <div className='list-input-speeds'>
                  <TextField id='' variant='outlined'
                    // type='number' 
                    sx={{width:200, paddingRight: 2}}
                    // name='numberCores'
                    placeholder='Đa nhân'
                    disabled={true}               
                  />
                  <TextField id='' label='Tốc độ' variant='outlined'
                    type='text' 
                    sx={{width: 100}} 
                    name='multipleCore'
                    value={multipleCore}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setMultipleCore(event.target.value)
                    }}
                  />                
                </div>
              </div>    

            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseFormCpu}>Hủy</Button>
              <Button onClick={handleVerifyCpu}>Xác nhận</Button>
            </DialogActions>
          </Dialog>
        </div>  

      </div>

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
    </div>
  );
};