import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../../../models/message";

const initialState : Message = {
    code: -1,
    content: '',
    open: false,
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        notificationSuccess(state, action:PayloadAction<Message>) {
            // let tmp = state;
            // tmp = action.payload;
            // return tmp
            console.log("Success message: ", action.payload)
            state = action.payload
        },
        notification(state, action:PayloadAction<Message>) {},
    }
})

// Actions
export const messageActions = messageSlice.actions
//state
export const stateOpen = (state:Message) => state
// Reducers
const messageReducers = messageSlice.reducer
export default messageReducers