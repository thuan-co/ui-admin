// @flow
import { useTheme, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { ConnectDto } from '../../models';
import { useAppDispatch } from '../../app/hooks';
import { connectActions } from '../redux-saga/connect/connectSlice';

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
    'A2DP',
    'LE',
    'v5.2',
]
const wifi = [
    'Wi-Fi Direct',
    'Wi-Fi hotspot',
    'Dual-band (2.4 GHz/5 GHz)',
    'Wi-Fi 802.11 a/b/g/n/ac/ax',
]

function getStyles(tech:string, listTechs: readonly string[], theme: Theme) {
    return {
        fontWeight:
        listTechs.indexOf(tech) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
        };
}

export default function MakeConnect() {
    const theme = useTheme()
    
    const dispatch = useAppDispatch()

    const [bluetoothTechs, setBluetoothTechs] = React.useState<string[]>([])

    const [wifiTechs, setWifiTechs] = React.useState<string[]>([])

    const initialState:ConnectDto = {
        id: null,
        mobileNetwork: '',
        wifi: '',
        bluetooth: ''
        }
    const [connectDto, setConnectDto] = React.useState<ConnectDto>(initialState)


    const handleChangeTechBluetooth = (event: SelectChangeEvent<typeof bluetoothTechs>) => {
        const {
            target: { value },
        } = event;
        setBluetoothTechs(
          // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(';') : value,
        );
        setConnectDto({...connectDto, bluetooth: value.toString()})
        };

    const handleChangeTechWifi = (event: SelectChangeEvent<typeof wifiTechs>) => {
        const {
            target: { value },
        } = event;
        setWifiTechs(
          // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(';') : value,
        );
        setConnectDto({...connectDto, wifi: value.toString()})
        };

    const handleMakeConnect = () => {
        
        // console.log("Connect info: ", connectDto)
        dispatch(connectActions.makeNewConnectPhone(connectDto))
    }
    return (
        <div className="container-connect">
            <h5>Kết nối</h5>
            <div className="right-container-connect">

                <TextField id='input-mobile-network' label='Mạng di động'           
                    value={connectDto.mobileNetwork}
                    name='mobileNetwork'
                    variant='outlined'
                    onChange={(event) => {
                        setConnectDto({...connectDto, [event.target.name]: event.target.value})
                    }}
                />
                
                <div className='bluetooth-tech-selection'>
                    <FormControl sx={{ m: 0, width: 300 }}>
                        <InputLabel id="bluetooth-tech-label">Công nghệ bluetooth</InputLabel>
                        <Select
                            labelId="bluetooth-tech-label"
                            id="bluetooth-tech-selected"
                            multiple
                            value={bluetoothTechs}
                            onChange={handleChangeTechBluetooth}                        
                            input={<OutlinedInput id="" label="Công nghệ bluetooth" />}
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
                                style={getStyles(name, bluetoothTechs, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="wifi-tech-selection">
                    <FormControl sx={{ m: 0, width: 300 }}>
                        <InputLabel id="wifi-tech-label">Công nghệ wifi</InputLabel>
                        <Select
                            labelId="wifi-tech-label"
                            id="wifi-tech-selected"
                            multiple
                            value={wifiTechs}
                            onChange={handleChangeTechWifi}                        
                            input={<OutlinedInput id="" label="Công nghệ wifi" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                        {wifi.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, wifiTechs, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="action-connect-btn">
                    <Button variant='outlined' color='error' >Xóa</Button>
                    <Button variant='contained' onClick={handleMakeConnect}>Tạo</Button>
                </div>
            </div>
            
            <div className="result-make-connect">
                Result create new connect
            </div>

        </div>
    );
};