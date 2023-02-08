import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CpuReq } from "../../../models/cpu";

const initialState:CpuReq = {
    id: null,
    name: "",
    cached: "",
    thread: "",
    core: "",
    fastest: "",
    speeds: [],
}

export const cpuSlice = createSlice({
    name: "cpu",
    initialState,
    reducers: {
        makeNewCpu(state, action: PayloadAction<CpuReq>) {
            let tmp = state
            tmp = action.payload
            return tmp
        },
        createSuccess(state, action: PayloadAction<number>) {
            let tmp = state
            tmp.id = action.payload
            return tmp
        },
    }
})

// Actions 
export const cpuActions = cpuSlice.actions
// Reducers 
const cpuReducer = cpuSlice.reducer
export default cpuReducer