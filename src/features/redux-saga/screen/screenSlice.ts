import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScreenDto } from "../../../models";

const initialState:ScreenDto = {
    id: null,
    brightest: '',
    dimension: '',
    note: '',
    resolution: '',
    tech: '',
    phoneId: null,
}

const screenSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        makeNewScreen(state, action:PayloadAction<ScreenDto>){
            // let tmp = state
            // tmp = action.payload
            console.log("PhoneId in screen slice:", action.payload)
            return action.payload
        },
        successMakeScreen(state, action:PayloadAction<ScreenDto>) {
            let tmp = state
            tmp = action.payload
            return tmp
        },
        failedMakeScreen() {},
    }
})
// Actions 
export const screenActions = screenSlice.actions
// Reducers
const screenReducer = screenSlice.reducer
export default screenReducer