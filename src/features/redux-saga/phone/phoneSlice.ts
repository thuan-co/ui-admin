import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {NewPhoneReq, PhoneReq} from "../../../models";

const initialState:NewPhoneReq = {
    id: null,
    name: '',
    operation: '',
    weigh: '',
    price: '',
    dimensions: '',
    dateAt: '',
    quantity: '',
    ram: '',
    storage: '',
    brandId: 0
}

const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {

        makeNewPhone(state, action:PayloadAction<PhoneReq>) {
        },
        makeNewBasePhone(state, action:PayloadAction<NewPhoneReq>) {
            let tmp = state
            tmp = action.payload
            return tmp
        }, 
        successMakeNewBasePhone(state, action:PayloadAction<number>) {
            let tmp = state;
            tmp.id = action.payload
            return tmp
        },
    }
})
// Actions
export const phoneActions = phoneSlice.actions
// Reducers
const phoneReducer = phoneSlice.reducer
export default phoneReducer