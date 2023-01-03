import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImgPhoneDto } from "../../../models";

const initialState:ImgPhoneDto = {
    avt: '',
    dimension: '',
    specification: '',
}

const imgPhone = createSlice({
    name: 'image_phone',
    initialState,
    reducers: {
        save(state, action:PayloadAction<ImgPhoneDto>) {
            let tmp = state
            tmp = action.payload
            return tmp
        },
    }
})
// actions
export const imagePhoneActions = imgPhone.actions
// reducers
export const imagePhoneReducers = imgPhone.reducer
