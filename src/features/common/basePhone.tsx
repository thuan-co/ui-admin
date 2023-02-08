// @flow
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { NewPhoneReq } from '../../models';
import { BrandResp } from '../../models/brand';
import { listBrandsActions } from '../redux-saga/brand/listBrandSlice';
import { phoneActions } from '../redux-saga/phone/phoneSlice';

type Props = {
    
};
export default function BasePhone(props: Props) {

    const [value, setValue] = React.useState<Dayjs | null>(null);

    const listBrand: BrandResp[] = useAppSelector((state:RootState)=>state.listBrands);

    const dispatch = useAppDispatch()

    const initialBasePhone:NewPhoneReq = {
        id: null,
        dateAt: '',
        dimensions: '',
        name: '',
        operation: '',
        price: '',
        weigh: '',
        ram: '',
        storage: '',
        quantity: '',
        brandId: null
    }

    const [base, setBase] = React.useState<NewPhoneReq>(initialBasePhone);

    const listRAM : number[] = [3, 4, 6, 8, 12, 16, 32]

    const handleChangeInputText = (e:React.ChangeEvent<HTMLInputElement>) => {
        
        const {value, name} = e.target
        setBase({...base, [name]: value})
    }

    const handleClickSave = () => {
        console.log("Thông tin cơ bản:", base)

        dispatch(phoneActions.makeNewBasePhone(base))
    }  
    
    const isLoaded = React.useRef(false)

    React.useEffect(()=>{

        if (!isLoaded.current) {

            dispatch(listBrandsActions.fetchAllBrands())
            isLoaded.current = true
        }
        
    }, [])
    
    return (
        <>
            <h1>Thêm điện thoại</h1>

            <div className='base-info-phone'>

                <h5>Thông tin cơ bản</h5>
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="" label="Tên" variant="outlined" 
                        name='name' value={base.name}
                        onChange={handleChangeInputText}
                    />

                    <FormControl>
                        <InputLabel id='select-brand-phone'>Hãng</InputLabel>
                        <Select
                            id='selected-brand-phone-value'
                            labelId='select-brand-phone'
                            // sx={{width: 100}}
                            label='Hãng'
                            name='brandId'
                            value={base.brandId}
                            onChange={(e) => {
                                setBase({...base, brandId:e.target.value as number})
                            }}
                        >
                            {listBrand.map((value, key) =>(
                                <MenuItem key={key} value={value.id}>{value.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField id="" label="Hệ điều hành" variant="outlined" 
                        name='operation' 
                        value={base.operation}
                        onChange={handleChangeInputText}
                    /> 

                    <TextField id="input-weigh" label="Khối lượng" variant="outlined" 
                        name='weigh' value={base.weigh}
                        type='number'
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>g or kg</InputAdornment> 
                        }}
                        onChange={handleChangeInputText}
                    />

                    <TextField id="" label="Giá" variant="outlined" 
                        name='price' value={base.price}
                        type='number'
                        InputProps={{
                            // startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            endAdornment: <InputAdornment position='end'>VNĐ</InputAdornment>
                        }}
                        onChange={handleChangeInputText}
                    />

                    <TextField id="" label="Kích thước" variant="outlined" 
                        name='dimensions' value={base.dimensions}
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
                            setBase({...base, dateAt: date})
                            setValue(value)
                            // console.log("Ngày ra mắt ", date)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    
                    <FormControl>
                        <InputLabel id='select-ram'>RAM</InputLabel>
                        <Select 
                            id=''
                            labelId='select-ram'
                            sx={{width: 100}}
                            label='RAM'
                            name='ram'
                            value={base.ram}
                            onChange={(event: SelectChangeEvent) => {
                                setBase({...base, ram:event.target.value as string})
                            }}
                        >
                        {listRAM.map((value, key) => (
                            <MenuItem key={key} value={value}>{value}</MenuItem>
                        ))}  
                            
                        </Select>
                    </FormControl>

                    <TextField id='' label="Lưu trữ" variant='outlined'
                        type='number'
                        inputProps={{
                            inputMode: 'numeric',
                            min: 0,
                            max: 10000,
                            step: 1,
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>GB</InputAdornment>
                        }}
                        name='storage' value={base.storage}
                        onChange={handleChangeInputText}
                    />

                    <TextField id='' label='Số lượng' variant='outlined'
                        type='number'
                        inputProps={{
                            inputMode: 'numeric',
                            min: 0,
                            max: 10000,
                            step: 1,
                        }}
                        name="quantity" value={base.quantity}
                        onChange={handleChangeInputText}
                    />
                </Box>

                <div className="base-info-btn">

                    <Button variant='outlined' color='secondary'
                        // onClick={}
                    >Hủy</Button>

                    <Button variant='contained' color='primary'
                        onClick={handleClickSave}
                    >Lưu</Button>
                </div>
            </div>
        </>
    );
};