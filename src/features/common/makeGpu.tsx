// @flow
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as React from 'react';
import { GpuDto } from '../../models';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { listGpusAction } from '../redux-saga/gpu/listGpuSlice';
import { gpuAction } from '../redux-saga/gpu/gpuSlice';

function Result() {
    const gpu:GpuDto = useAppSelector((state:RootState)=>state.gpu)
    return(
        <>
            <div>{gpu.name}</div>
        </>
    )
}

export default function MakeGpu() {

    const [isNewGpu, setIsNewGpu] = React.useState(false)

    const listGpus:GpuDto[] = useAppSelector((state:RootState)=>state.gpus)

    const [gpu, setGpu] = React.useState<GpuDto>({id: '', name: ''})

    const isCreated = React.useRef(false)

    const dispatch = useAppDispatch()

    const isRender = React.useRef(false);

    const handleNewGpu = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsNewGpu(event.target.checked)
    }
    
    const handleCloseFormGgu = () => {
        setIsNewGpu(false)
    }

    const handleVerifyFormGpu = () => {
        dispatch(gpuAction.makeNewGpu(gpu))
        setIsNewGpu(false)
        isCreated.current = true
    }

    

    const handleChangeInputGpuName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGpu({...gpu, [e.target.name]:e.target.value})
    }
    
    React.useEffect(()=>{
        if (!isRender.current) {
            dispatch(listGpusAction.fetchAllGpus())
            isRender.current = true
        }
    }, [])

    return (
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
            {(isCreated.current ? <Result /> :
                <div className='selected-gpu-container'> 
                    <Box>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id='gpu-selection-label'>GPU</InputLabel>
                            <Select
                                id='gpu-selection'
                                labelId='gpu-selection-label'
                                label='GPU'
                                // name='idGpu'
                                value={gpu.id}
                                // sx = {{width: 200}}
                                // disabled={isNewGpu}
                                onChange={(e)=> {
                                    setGpu({...gpu, id:e.target.value as number})
                                }}
                            >
                                {listGpus.map((value, key) =>(
                                    <MenuItem key={key} value={value.id}>{value.name}</MenuItem>
                                ))}
                                
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            )}
            <div>
                <Dialog open={isNewGpu} onClose={handleCloseFormGgu}>
                    <DialogTitle>Thêm một GPU mới</DialogTitle>
                    <DialogContent>
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                    >
                        <TextField id='' label='Tên GPU' variant='outlined' sx={{marginTop: 2}} 
                        name='name'
                        value={gpu.name}
                        onChange={handleChangeInputGpuName}
                        />
                    </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseFormGgu}>Hủy</Button>
                        <Button onClick={handleVerifyFormGpu}>Xác nhận</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};