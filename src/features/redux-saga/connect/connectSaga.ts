import { PayloadAction } from "@reduxjs/toolkit";
import { delay, fork, takeLatest } from "redux-saga/effects";
import { ConnectDto } from "../../../models";
import { connectActions } from "./connectSlice";

function* workerMakeNewConnectionPhone(action: PayloadAction<ConnectDto>){
    console.log("Made new connection phone: ", action.payload)
    yield delay(1000)
}

function* watcherMakeNewPhoneConnect(){
    yield takeLatest(connectActions.makeNewConnectPhone, workerMakeNewConnectionPhone)
}

export default function* watchMakeNewPhoneConnect() {
    yield fork(watcherMakeNewPhoneConnect);
}