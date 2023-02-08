import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GpuDto } from "../../../models";

const initialState:GpuDto = {
    id: 0,
    name: ''
}

const gpuSlice=createSlice({
    name: 'gpu',
    initialState,
    reducers: {
        makeNewGpu(state, action:PayloadAction<GpuDto>){
            // let tmp = state
            // tmp = action.payload
            // return tmp
        },
        makeSuccess(state, action:PayloadAction<GpuDto>){
            let tmp = state
            tmp = action.payload
            return tmp
        },
    }
})

//Actions 
export const gpuAction = gpuSlice.actions
//Reducers
const gpuReducer = gpuSlice.reducer
export default gpuReducer