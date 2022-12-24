import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, take, takeLatest } from "redux-saga/effects"
import { CpuReq } from "../../../models/cpu";
import { cpuActions } from "./cpuSlice";
import CpuApi from "../../../constants/cpuApi";
import { POST } from "../../../constants/method.httprequest";

function* handleMakingCpu(action:PayloadAction<CpuReq>) {

    const [result, error]:any[] = yield call(CpuApi, '/create/cpu', cpuActions.makeNewCpu.type, POST, action.payload)

    if (result) {

        const {id} = result
        yield put(cpuActions.createSuccess(id))
    }
    else {
        console.log("Error: ", error)
    }
}

function* workerMakingCpu() {
    
    const action:PayloadAction<CpuReq> = yield take(cpuActions.makeNewCpu)
    yield fork(handleMakingCpu, action)
}

export default function* watcherMakingCpu() {

    yield fork(workerMakingCpu);
}