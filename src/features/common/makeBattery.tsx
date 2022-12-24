// @flow
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { BatteryDto } from '../../models';
import { useAppDispatch } from '../../app/hooks';
import { batteryActions } from '../redux-saga/battery/batterySlice';

const ITEM_HEIGHT = 48
    const ITEM_PADDING_TOP = 8
    const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            with: 250,
        },
        },
    }
const techs = [
    'Sạc không dây',
    'Sạc nhanh pin',
    'Tiết kiệm pin',
]
function getStyles(tech:string, listTechs: readonly string[], theme: Theme) {
return {
    fontWeight:
    listTechs.indexOf(tech) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    };
}

export default function MakeBattery() {

    const theme = useTheme()

    const dispatch = useAppDispatch()

    const initialBattery: BatteryDto = {
        id: null,
        capacity: '',
        charging: '',
        tech: '',
        type: '',
    }

    const [techName, setTechName] = React.useState<string[]>([])

    const [battery, setBattery] = React.useState<BatteryDto>(initialBattery)

    const handleChangeTechBattery = (event: SelectChangeEvent<typeof techName>) => {
        const {
        target: { value },

        } = event;
        setTechName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        )
        // console.log("List battery tech: ", techName)
        // setBattery({...battery, tech: techName.join(';')})
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const {value, name} = event.target
        setBattery({...battery, [name]: value})
        // console.log('Battery spec: ', battery)
    }

    const handleMakeBtn = () => {

        dispatch(batteryActions.makeNewBattery(battery))
    }
    
    const handleClearBtn = () => {
        setBattery(initialBattery)
        setTechName([])
        // set
    }

    React.useEffect(() => {
        // side effect here....
        setBattery({...battery, tech: techName.join(";")})  
    }, [techName])

    return (
    <div className="container-battery">
        <h5>Pin</h5>

        <div className="battery-content">
            <div className="make-battery">
                <TextField id='' label="Dung lượng pin" sx={{width: 150}}
                    name='capacity'
                    value={battery.capacity}
                    type='number'
                    onChange={handleChangeInput}
                    inputProps={{
                        min: 1000,
                        max: 100000,
                    }}
                />

                <TextField id='' label="Hỗ trợ sạc tối đa" 
                    type='number'
                    name='charging'
                    value={battery.charging}
                    onChange={handleChangeInput}
                    inputProps={{
                        min: 1,
                        max: 1000,
                    }}
                />
                <TextField id='' label="Loại pin" sx={{width:100}}
                    name='type'
                    value={battery.type}
                    onChange={handleChangeInput}
                />
                <div className='battery-tech-selection'>
                    <FormControl sx={{ m: 0, width: 390 }}>
                        <InputLabel id="battery-tech-label">Công nghệ pin</InputLabel>
                        <Select
                            labelId="battery-tech-label"
                            id=""
                            multiple
                            value={techName}
                            onChange={handleChangeTechBattery}
                            
                            input={<OutlinedInput id="" label="Công nghệ pin" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                        {techs.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, techName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="result-make-battery">
                result make
            </div>
        
        

        </div>

        <div className="btn-action-battery">
            <Button variant='outlined' onClick={handleClearBtn} color='error'>Xóa</Button>
            <Button variant='contained' onClick={handleMakeBtn}>Tạo</Button>
        </div>
    </div>
    );
};