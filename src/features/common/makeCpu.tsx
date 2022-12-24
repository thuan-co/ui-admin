// @flow
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as React from 'react';
import { CpuReq, Speeds } from '../../models/cpu';

export default function MakeCpu() {

    const [isNewCpu, setIsNewCpu] = React.useState(false);

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
    );
};