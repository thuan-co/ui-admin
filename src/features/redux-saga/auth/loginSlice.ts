import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginDto } from "../../../models/admin";
import { NavigateFunction, NavigationType } from "react-router-dom";
import assert from "assert";
import { customHistory } from "../../../router/CustomBrowserRouter";

export interface LoginSaga {
    account?: LoginDto
    isLogin: boolean
}

const initialState:LoginSaga = {
    account: {
        username: '',
        password: '',
    },
    isLogin: false,
} 

const loginSlice = createSlice({
    name: 'login', 
    initialState,
    reducers: {
        fetchAccount(state, action:PayloadAction<LoginSaga>) {
            let tmp = state
            tmp.account = action.payload.account
            return tmp
        },
        loginSuccess(state) {
            
            state.isLogin = true
            // customHistory.push('/admin')
            return state
        },
        loginFailed(state, action:PayloadAction<string>) {

            // let navigate = state.navigate
            // navigate('/')
        },
        logout(state) {
            state.isLogin = false
            state.account = undefined
        },
    }
})
// Actions
export const loginAction = loginSlice.actions
// Reducer
const loginReducer = loginSlice.reducer
export default loginReducer