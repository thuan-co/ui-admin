import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginDto } from "../../../models/admin";
import { NavigateFunction } from "react-router-dom";

interface LoginSaga {
    navigate: NavigateFunction | null
    account: LoginDto
}

const initialState:LoginSaga = {
    account: {
        username: '',
        password: '',
    },

    navigate: null,
} 
const loginSlice = createSlice({
    name: 'login', 
    initialState,
    reducers: {
        fetchAccount(state, action:PayloadAction<LoginDto>) {
            let tmp = state
            tmp.account = action.payload
            return tmp
        },
        loginSuccess(state, action:PayloadAction<NavigateFunction>) {
            let navigate = state.navigate
            navigate = action.payload
            navigate("/admin")
        },
    }
})
// Actions
export const loginAction = loginSlice.actions
// Reducer
const loginReducer = loginSlice.reducer
export default loginReducer