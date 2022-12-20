import { PayloadAction } from "@reduxjs/toolkit";
import { delay, fork, takeLatest } from "redux-saga/effects";
import { BatteryDto } from "../../../models";
import { batteryActions } from "./batterySlice";

function* workerMakeBattery(action:PayloadAction<BatteryDto>) {
    
    console.log("Make new battery(Saga): ", action.payload)

    // call api to crate new battery
    yield delay(1000)
}

function* watcherMakeNewBattery() {
    
    yield takeLatest(batteryActions.makeNewBattery, workerMakeBattery)
}

export default function* watchMakeNewBattery() {
    
    yield fork(watcherMakeNewBattery);
}