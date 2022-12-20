// @flow
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import * as React from 'react';
import { ScreenDto } from '../../models';

const notes = [
    'Màn hình chính',
    'Màn hình phụ',
    'Màn hình camera'
]


export default function MakeScreen() {

    const initialState: ScreenDto = {
        id: null,
        brightest: '',
        dimension: '',
        note: '',
        resolution: '',
        tech: '',
    }
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
    return (
        <div className='screen-container'>
            <h5>Màn hình</h5>
            <div className='make-screen-container'>
                <div className='selected-note'>
                    <FormControl sx={{ m: 0, width: 200 }}>
                        <InputLabel id="note-label">Vai trò</InputLabel>
                        <Select
                            labelId="note-label"
                            id=""
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
                    onClick= {()=> {
                        console.log("Screen data: ", screen)
                    }}
                >Tạo</Button>
            </div>

            <div className="result-screen">
                Ket qua
            </div>
        </div>
    );
};