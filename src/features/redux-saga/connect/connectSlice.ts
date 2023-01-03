import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConnectDto } from "../../../models";

const initialState: ConnectDto = {
    id: null,
    mobileNetwork: '',
    wifi: '',
    bluetooth: '',
}

const connectSlice = createSlice({
    name: "connect",
    initialState,
    reducers: {
        makeNewConnectPhone(state, actions: PayloadAction<ConnectDto>) {
            let tmp = state
            tmp = actions.payload
            return tmp
        },
        successMakeNewConnectPhone(state, actions: PayloadAction<ConnectDto>) {

            console.log("Tạo thành công kết nối")
            return actions.payload
        }
    }
})
// Actions
export const connectActions = connectSlice.actions

// Reducers
const connectReducers = connectSlice.reducer
export default connectReducers