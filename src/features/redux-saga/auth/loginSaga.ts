import { call, fork, put, takeLatest } from "redux-saga/effects";
import { loginAction } from "./loginSlice";
import HookAPI from "../../../constants/HookAPI";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginDto } from "../../../models/admin";

function* workerLogin(action: PayloadAction<LoginDto>) {

    const [result, error] : any[] = yield call(HookAPI, 'login', action.type, "POST", action.payload)

    

    if (result) {

        const {access_token, refresh_token} = result
        // console.log("Data access_token from server: ", access_token)
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("refresh_token", refresh_token)
        yield put(loginAction.loginSuccess)
    }
    else {
        // notify error to client
        console.log("Message error: ", error)
    }
}

function* watcherLogin() {
    yield takeLatest(loginAction.fetchAccount, workerLogin)
}

export default function* watcherAuthAccount() {
    yield fork(watcherLogin)
}