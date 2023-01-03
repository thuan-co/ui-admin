import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { ConnectDto } from "../../../models";
import { connectActions } from "./connectSlice";
import PhoneApi from "../../../constants/phoneApi";
import { POST } from "../../../constants/method.httprequest";
import { updatingPhoneActions } from "../phone/updateSlice";

function* handleMakingConnect(action: PayloadAction<ConnectDto>){

    // console.log("Made new connection phone: ", action.payload)
    const [result, error]:any[] = yield call(PhoneApi, '/create/connect', action.type, POST, action.payload)
    if (result) {
        yield put(connectActions.successMakeNewConnectPhone(result))
        yield put(updatingPhoneActions.updatingConnectForPhone(result.id))
    }
    //TODO: handle error
}

function* watcherMakeNewPhoneConnect(){
    const action:PayloadAction<ConnectDto> = yield take(connectActions.makeNewConnectPhone)
    yield fork(handleMakingConnect, action)
}

export default function* watchMakeNewPhoneConnect() {
    yield fork(watcherMakeNewPhoneConnect);
}