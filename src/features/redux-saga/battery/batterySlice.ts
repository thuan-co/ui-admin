import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BatteryDto } from "../../../models";

const initialState:BatteryDto = {
    id: null,
    capacity: '',
    tech: '',
    charging: '',
    type: '',
}
const batterySlice = createSlice({
    name: 'battery',
    initialState,
    reducers: {
        makeNewBattery(state, action: PayloadAction<BatteryDto>) {
            
            let tmpBattery = state
            tmpBattery = action.payload
            return tmpBattery
        },
        successMakeBattery(state, action: PayloadAction<BatteryDto>) {
            console.log("Battery return from server: ", action.payload.id)
            return action.payload
        }
    }
})
// Reducers
const batteryReducers = batterySlice.reducer
// Actions
export const batteryActions = batterySlice.actions

export default batteryReducers