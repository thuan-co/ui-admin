
// @flow
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import './login.css';
import { LoginDto } from '../models/admin';
import { useAppDispatch } from '../app/hooks';
import { loginAction } from '../features/redux-saga/auth/loginSlice';
import { useNavigate } from 'react-router-dom';

export function Login() {

    const initialLogin:LoginDto = {
        username: '',
        password: '',
    }

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = React.useState<boolean>(false)

    const [login, setLogin] = React.useState<LoginDto>(initialLogin)

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {

        const {value, name} = event.target
        setLogin({...login, [name]: value})
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClickLogin = async () => {

        console.log("Login information:", login)
        await dispatch(loginAction.fetchAccount(login))
        dispatch(loginAction.loginSuccess(navigate))
    }
    return (
        <section className='login-container'>

            <div className="title-content">
                <h2>Đăng nhập</h2>
                <p>Quản trị hệ thống</p>
            </div>
            
            <Box component='form' className='form-login'>
                <TextField type='email' required id="username-input" 
                    label="Tài khoản" 
                    variant="outlined" 
                    name='username'
                    value={login.username}
                    onChange={handleChangeInput}
                />

                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        required    
                        value={login.password}
                        name='password'
                        onChange={handleChangeInput}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label='Password'
                    />
                </FormControl>

                <Button id='btn-login' variant='contained'
                    onClick={handleClickLogin}
                >
                    Đăng nhập
                </Button>
            </Box>
        </section>
    );
};