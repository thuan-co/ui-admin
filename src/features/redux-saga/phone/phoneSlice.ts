import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {PhoneReq} from "../../../models";

const initialState:PhoneReq = {
    id: null,
    name: '',
    operation: '',
    weigh: '',
    price: '',
    dimensions: '',
    dateAt: ''
}

const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        makeNewPhone(state, action:PayloadAction<PhoneReq>) {
            let phoneTmp = state
            phoneTmp = action.payload
            return phoneTmp
        }
    }
})
// Actions
export const phoneActions = phoneSlice.actions
// Reducers
const phoneReducer = phoneSlice.reducer
export default phoneReducer