import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GpuDto } from "../../../models";

const initialState: GpuDto[] = []

const listGpus = createSlice({
    name: "gpus",
    initialState,
    reducers: {
        fetchAllGpus() {},
        fetchSuccess(state, action:PayloadAction<GpuDto[]>) {
            let tmp = [...state]
            tmp = [...action.payload]
            return tmp
        },
        fetchFailed() {

        }
    }
})
//Reducers
const listGpusReducer = listGpus.reducer
export default listGpusReducer
//Action
export const listGpusAction = listGpus.actions