import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginDto } from "../../../models/admin";

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
            let tmp = state
            // tmp.account = action.payload
            tmp.isLogin = true
            // customHistory.push('/admin')
            return tmp
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