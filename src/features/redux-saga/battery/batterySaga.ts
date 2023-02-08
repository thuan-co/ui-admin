import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { BatteryDto } from "../../../models";
import { batteryActions } from "./batterySlice";
import PhoneApi from "../../../constants/phoneApi";
import { POST } from "../../../constants/method.httprequest";
import { updatingPhoneActions } from "../phone/updateSlice";

function* handleMakeBattery(action:PayloadAction<BatteryDto>) {
    
    console.log("Make new battery (Saga): ", action.payload)

    // call api to crate new battery
    const [result, error]:any[] = yield call(PhoneApi, '/create/battery', action.type, POST, action.payload)

    if (result) {
        // TODO: Notifying success
        yield put(batteryActions.successMakeBattery(result))
        yield put(updatingPhoneActions.updatingBatteryForPhone(result.id))
    }
    // yield delay(1000)
}

function* watcherMakeNewBattery() {
    
    const action:PayloadAction<BatteryDto> = yield take(batteryActions.makeNewBattery)
    yield fork(handleMakeBattery, action)
}

export default function* watchMakeNewBattery() {
    
    yield fork(watcherMakeNewBattery);
}