import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CameraDto } from "../../../models";

const initialState:CameraDto[] = []
    
const cameraSlice = createSlice({
    name:'camera',
    initialState,
    reducers: {
        makeNewCamera(state, action:PayloadAction<CameraDto[]>){ 
            let tmp = state;
            tmp = action.payload
            return tmp
        },
        // makeNewRCamera(state, action:PayloadAction<CameraDto>){},
        // makeSuccessFCamera(state, action:PayloadAction<CameraDto>){ return action.payload },
        makeSuccessCamera(state, action:PayloadAction<CameraDto[]>){ return action.payload },
    }
})

//Actions
export const cameraActions = cameraSlice.actions
//Reducers
const cameraReducers = cameraSlice.reducer
export default cameraReducers