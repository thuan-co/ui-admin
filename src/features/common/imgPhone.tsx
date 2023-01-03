import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ImgPhoneDto } from "../../models";
import { useAppDispatch } from "../../app/hooks";
import { imagePhoneActions } from "../redux-saga/img/imgSlice";
import { updatingPhoneActions } from "../redux-saga/phone/updateSlice";

export default function ImgPhone() {

    const [imgPhone, setImgPhone] = useState<ImgPhoneDto>({
        avt:'',
        dimension:'',
        specification:''    
    })

    const dispatch = useAppDispatch()

    const handleChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setImgPhone({...imgPhone, [name]:value})
    }

    const handleSave = () => {
        dispatch(imagePhoneActions.save(imgPhone))
        dispatch(updatingPhoneActions.updatingImgForPhone(imgPhone))
    }
    return (
        <div className="img-phone-container">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="avatar-input-img" 
                    label="Ảnh đại diện"         
                    variant="outlined"
                    name='avt'
                    value={imgPhone.avt}
                    onChange={handleChangeTextField}
                />

                <TextField id="dimension-input-img" 
                    label="Ảnh mô tả kích thước"         
                    variant="outlined"
                    name="dimension"
                    value={imgPhone.dimension}
                    onChange={handleChangeTextField}
                />

                <TextField id="specification-input-img" 
                    label="Ảnh mô tả kỹ thuật"         
                    variant="outlined"
                    name='specification'
                    value={imgPhone.specification}
                    onChange={handleChangeTextField}
                />
            </Box>
            <div className="action-button">
                <Button color="success" onClick={handleSave} variant="contained">Lưu</Button>
            </div>
        </div>
    )
}