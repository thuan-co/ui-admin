// @flow
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import * as React from 'react';
import { ScreenDto } from '../../models';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { screenActions } from '../redux-saga/screen/screenSlice';
import { RootState } from '../../app/store';

const notes = [
    'Màn hình chính',
    'Màn hình phụ',
    'Màn hình camera'
]


export default function MakeScreen() {

    const phoneId = useAppSelector((state:RootState)=>state.phone.id)

    const initialState: ScreenDto = {
        id: null,
        brightest: '',
        dimension: '',
        note: '',
        resolution: '',
        tech: '',
        phoneId: null,
    }

    const dispatch = useAppDispatch()

    const [screen, setScreen] = React.useState<ScreenDto>(initialState)

    const handleChangeNote = (event: SelectChangeEvent<typeof screen.note>) => {
        const {
            target: { value },
        } = event;
        // setNote(value)
        setScreen({...screen, note: value})
    }

    const handleChangeScreen = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setScreen({...screen, [name]: value})
    }

    const handleOnClick = () => {
        
        // console.log("Screen:", screen);
        dispatch(screenActions.makeNewScreen(screen))
    }

    React.useEffect(()=>{
        setScreen({...screen, phoneId: phoneId})
    }, [phoneId])

    return (
        <div className='screen-container'>
            <h5>Màn hình</h5>
            <div className='make-screen-container'>
                <div className='selected-note'>
                    <FormControl sx={{ m: 0, width: 200 }}>
                        <InputLabel id="note-label">Vai trò</InputLabel>
                        <Select
                            labelId="note-label"
                            id="selected-type-screen"
                            value={screen.note}
                            onChange={handleChangeNote}                        
                            input={<OutlinedInput id="" label="Loại" />}
                            
                        >
                        {notes.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
                <TextField id='input-resolution' label='Độ phân giải'
                    name='resolution'
                    value={screen.resolution}
                    onChange={handleChangeScreen}
                />

                <TextField id='input-brightest' label='Độ sáng'
                    type='number'
                    name='brightest'
                    value={screen.brightest}
                    inputProps={{
                        min: 100,
                        max: 10000,
                    }}
                    onChange={handleChangeScreen}
                />
                <TextField id='input-dimension' label='Kích thước'
                    name='dimension'
                    value={screen.dimension}
                    onChange={handleChangeScreen}
                />
                
                <TextField id='input-techs' label='Công nghệ'
                    name='tech'
                    value={screen.tech}
                    onChange={handleChangeScreen}
                />
            </div>
            
            <div className="btn-action-screen">
                <Button variant='outlined' color='error'>Xóa</Button>
                <Button color='success' variant='contained'
                    onClick= {handleOnClick}
                >Tạo</Button>
            </div>

        </div>
    );
};