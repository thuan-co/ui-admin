import { call, fork, put, take } from "redux-saga/effects";
import { listGpusAction } from "./listGpuSlice";
import GpuAPI from "../../../constants/GpuAPI";
import { gpuAction } from "./gpuSlice";
import { GpuDto } from "../../../models";
import { PayloadAction } from "@reduxjs/toolkit";
import { POST } from "../../../constants/method.httprequest";
import { cpuActions } from "../cpu/cpuSlice";

function* handleGetAllGpus() {
    const [result]:any[] = yield call(GpuAPI, 'gpus/phone')
    // console.log("Data returns from db: ", result)
    yield put(listGpusAction.fetchSuccess(result))
}

function* workerGetAllGpus() {
    yield take(listGpusAction.fetchAllGpus)
    yield fork(handleGetAllGpus)
}

export function* watcherGetAllGpus() {
    yield fork(workerGetAllGpus)
}

function* handleMakeNewGpu(action:PayloadAction<GpuDto>){
    const [result, error]:any[] = yield call(GpuAPI, 'create/gpu/phone', action.type, POST,action.payload)
    if(result) {
        console.log("Result creates gpu: ", result)
        yield put(gpuAction.makeSuccess(result))
        //TODO: notifying success
    }
    //TODO: Notifying errors
}

function* workerMakeNewGpu(){
    const action:PayloadAction<GpuDto> = yield take(gpuAction.makeNewGpu)
    yield fork(handleMakeNewGpu, action)
}

export function* watcherMakeGpus() {
    yield fork(workerMakeNewGpu)
}