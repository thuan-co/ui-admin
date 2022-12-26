import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CpuDto } from "../../../models/cpu";


const initialState:CpuDto[] = []

const listCpus = createSlice({
    name: "cpus",
    initialState,
    reducers: {
        getAllCpus() {
        },
        fetchSuccess(state, action: PayloadAction<CpuDto[]>) {
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp
        }, 
        fetchFailed() {},
    }
})

// Actions
export const listCpusAction = listCpus.actions
// Reducers
const listCpusReducer = listCpus.reducer
export default listCpusReducer 