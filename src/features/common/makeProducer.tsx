import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppDispatch } from '../../app/hooks';
import { BrandDto } from '../../models/brand';
import { brandActions } from '../redux-saga/brand/brandSlice';
import './make.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MakeProducer() {

    const [brand, setBrand] = React.useState<BrandDto>(
        {name:'',
        field:'',
        logo:''})

    const dispatch = useAppDispatch()

    const handleChangeInputText =  (event: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value} = event.target
        setBrand({...brand, [name]: value})
        
    }

    const handleClick = () => {

        // setOpen(true);
        
        dispatch(brandActions.makeNewBrand(brand))
        
        // toast('Here is toast.')
        
        // setOpen(flag)
        console.log("xu ly thong tin gui di")
        
    }

    const handleClickCancel = () => {

        setBrand({name: '', logo: '', field: ''})
        // console.log("Data cancel", brand)
    }

    const handleChangeSelect = (event: SelectChangeEvent) => {

        const {name, value} = event.target

        console.log("Selected field: ", value)
        setBrand({...brand, [name]:value})
        console.log("Brand dto: ", brand)
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }
    };


    return (
        <div className='made-new-brand-container'>

            <div className='input-field-container'>

                <TextField id="brand-content" label="Thương hiệu" variant="outlined" sx={{width: '250px', margin: "10px 5px", backgroundColor: "#fff"}} 
                    value={brand.name}
                    name='name'
                    onChange={handleChangeInputText}
                />

                <TextField id="logo-brand" label="Link logo" variant="outlined" sx={{width: '250px', margin: "10px 5px", backgroundColor: "#fff"}}
                    value={brand.logo}
                    name='logo'
                    onChange={handleChangeInputText}
                />

                {/* <TextField id="intro-content" label="Giới thiệu" multiline variant="outlined" sx={{width: '100%', margin: "10px 5px", backgroundColor: "#fff"}}
                    value={brand.introduction}
                    name='introduction'
                    onChange={handleChangeInputText}
                /> */}

                <FormControl sx={{ m: 1, minWidth:200, backgroundColor: "#fff" }} >
                    <InputLabel id="select-label-device">Device</InputLabel>
                    <Select
                        labelId="select-label-device"
                        id="select-device"
                        value={brand.field}
                        name='field'
                        label="Device"
                        sx={{minWidth: 200}}
                        onChange={handleChangeSelect}
                    >
                        <MenuItem value={"Điện thoại"}>Điện thoại</MenuItem>
                        <MenuItem value={"Laptop"}>Laptop</MenuItem>
                        <MenuItem value={"Điện thoại và laptop"}>Điện thoại và laptop</MenuItem>
                    </Select>
                </FormControl>

                

            </div>
            
            <div className='btn-container'>
                <Button variant="contained" color='error' sx={{marginRight: "10px"}}
                    onClick={handleClickCancel}
                >
                    Hủy
                </Button>

                <Button variant="contained" color='primary' onClick={handleClick}>Lưu</Button>
            </div>
            <Toaster />
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'right'}}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {select.content}
                </Alert>
            </Snackbar>    */}
            {/* <Alert severity="success">This is a success message!</Alert> */}
        </div>
    );
};