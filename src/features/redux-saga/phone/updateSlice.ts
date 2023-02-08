import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImgPhoneDto } from "../../../models";

export interface UpdatePhoneDto {
    phone_id?:number|null
    battery_id?:number|null
    connect_id?:number|null
    cpu_id:number|null
    gpu_id: number|null
    phoneImgDto:ImgPhoneDto | null
    fcamera_id: number | null
}

const initialState:UpdatePhoneDto = {
    phone_id: 0,
    battery_id: 0,
    connect_id: 0,
    cpu_id: 0,
    gpu_id: 0,
    phoneImgDto: null,
    fcamera_id: 0
}

const updatingPhone = createSlice({
    name: "updatingPhone",
    initialState,
    reducers: {
        updatingPhone(state, action:PayloadAction<UpdatePhoneDto>){
            let tmp = {...state}
            tmp = action.payload
            return tmp
        },
        updateFailed(){},
        updateSuccess(){},
        updatingImgForPhone(state, action:PayloadAction<ImgPhoneDto>) {
            let tmp = {...state}
            tmp.phoneImgDto = action.payload
            return tmp
        },
        updatingBatteryForPhone(state, action:PayloadAction<number>) {
            let tmp = {...state}
            tmp.battery_id = action.payload
            return tmp;
        },
        updatingConnectForPhone(state, action:PayloadAction<number>) {
            let tmp = {...state}
            tmp.connect_id = action.payload
            return tmp;
        },
        updatingCpuForPhone(state, action:PayloadAction<number>) {
            let tmp = {...state}
            tmp.cpu_id = action.payload
            return tmp;
        },
        updatingGpuForPhone(state, action:PayloadAction<number>) {
            let tmp = {...state}
            tmp.gpu_id = action.payload
            return tmp;
        },
        updatingIdForPhoneDto(state, action:PayloadAction<number>) {
            let tmp = {...state}
            tmp.phone_id = action.payload
            return tmp;
        },
        updatingFCameraForPhone(state,action:PayloadAction<number>) {
            let tmp = {...state}
            tmp.fcamera_id = action.payload
            return tmp;
        }
    }
})
// Actions
export const updatingPhoneActions = updatingPhone.actions
// Reducers
const updatingPhoneReducer = updatingPhone.reducer
export default updatingPhoneReducer