import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import { LoginSaga, loginAction } from "./loginSlice";
import HookAPI from "../../../constants/HookAPI";
import { PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, LoginDto } from "../../../models/admin";
import { customHistory } from "../../../router/CustomBrowserRouter";

export const ACCESS_TOKEN = 'access_token'

function* handleLogin(action: PayloadAction<LoginSaga>) {

    const [result, error] : any[] = yield call(HookAPI, 'login', action.type, "POST", action.payload.account)

    if (result) {

        const account:AuthResponse = result
        localStorage.setItem("access_token", account.access_token)
        localStorage.setItem("refresh_token", account.refresh_token)
        yield put(loginAction.loginSuccess)
        customHistory.push('/admin')
    }
    else {
        // notify error to client
        console.log("Message error: ", error)
    }
    // console.log("Handle log in")
}

function* handleLogOut() {
    console.log("Handle log out")
    localStorage.removeItem(ACCESS_TOKEN)
    // redirect login page after log out
    yield take(loginAction.logout.type)
    // fork ?
}

function* watcherLogin() {
    // yield takeLatest(loginAction.fetchAccount, workerLogin)
    while (true) {

        const isLoggedIn = Boolean(localStorage.getItem("access_token"))

        if (!isLoggedIn) {
            // if user not authentication, listing action login
            const action: PayloadAction<LoginSaga> = yield take(loginAction.fetchAccount)
            yield fork(handleLogin, action)
        }    

        yield take(loginAction.logout.type)
        yield fork(handleLogOut)
    }
    
}

export default function* watcherAuthAccount() {
    yield fork(watcherLogin)
}