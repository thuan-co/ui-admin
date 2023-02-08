import { PayloadAction } from "@reduxjs/toolkit"
import { call, delay, fork, put, take, takeLatest } from "redux-saga/effects"
import PhoneApi from "../../../constants/phoneApi"
import { NewPhoneReq, PhoneReq } from "../../../models"
import { phoneActions } from "./phoneSlice"
import * as methodTypes from '../../../constants/method.httprequest';
import updatingPhoneReducer, { UpdatePhoneDto, updatingPhoneActions } from "./updateSlice"

function* workerMakeNewPhone(action: PayloadAction<NewPhoneReq>) {

    yield delay(1000)

    console.log("Data in state", action.payload)

    const [result, error] : any[] = yield call(PhoneApi, '/test', phoneActions.makeNewBasePhone.type, methodTypes.POST, action.payload)

    if (result) {
        console.log("Phone id return from server: ", result)
        yield put(phoneActions.successMakeNewBasePhone(result))
        yield put(updatingPhoneActions.updatingIdForPhoneDto(result))
        // yield delay(1000)
    }
    // console.log("Data return from server: ", result)
    // console.log("Error return from server: ", error)
}

function* watchMakeNewPhone(){   
    
    yield takeLatest(phoneActions.makeNewBasePhone, workerMakeNewPhone)
}

export function* newPhoneSaga() {
    // console.log("Saga for make new phone")
    yield fork(watchMakeNewPhone)
}

// Updating phone
function* handleUpdatingPhone(action:PayloadAction<UpdatePhoneDto>) {

    // yield delay(100)
    const [result, error]:any[] = yield call(PhoneApi,'/update/phone',updatingPhoneActions.updatingPhone.type, methodTypes.POST, action.payload)

}

function* workerUpdatingPhone() {
    yield takeLatest(updatingPhoneActions.updatingPhone, handleUpdatingPhone)
}

export function* watcherUpdatingPhone() {
    yield fork(workerUpdatingPhone)
}