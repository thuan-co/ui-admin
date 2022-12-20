import { PayloadAction } from "@reduxjs/toolkit"
import { call, delay, fork, takeLatest } from "redux-saga/effects"
import PhoneApi from "../../../constants/phoneApi"
import { PhoneReq } from "../../../models"
import { phoneActions } from "./phoneSlice"
import * as methodTypes from '../../../constants/method.httprequest';

function* workerMakeNewPhone(action: PayloadAction<PhoneReq>) {

    yield delay(1000)

    console.log("Data in state", action.payload)

    const [result, error] : any[] = yield call(PhoneApi, '/test', phoneActions.makeNewPhone.type, methodTypes.POST, action.payload)

    console.log("Data return from server: ", result)
    console.log("Error return from server: ", error)
}

function* watchMakeNewPhone(){
    
    
    yield takeLatest(phoneActions.makeNewPhone, workerMakeNewPhone)
}

export default function* newPhoneSaga() {
    console.log("Saga for make new phone")
    yield fork(watchMakeNewPhone)
}