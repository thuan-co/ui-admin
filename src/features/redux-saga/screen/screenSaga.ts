import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, take } from "redux-saga/effects";
import { ScreenDto } from "../../../models";
import { screenActions } from "./screenSlice";
import PhoneApi from "../../../constants/phoneApi";
import { POST } from "../../../constants/method.httprequest";

function* handleMakeNew(action:PayloadAction<ScreenDto>) {
    
    const [result, error]:any[] = yield call(PhoneApi, '/create/screen', action.type, POST, action.payload)
    
    if (result) {
        yield put(screenActions.successMakeScreen(result))
    }
    // TODO: notifying error

}

function* workerMakeScreen() {
    const action:PayloadAction<ScreenDto> = yield take(screenActions.makeNewScreen)
    yield fork(handleMakeNew, action)
}

export function* watcherMakeScreen() {
    yield fork(workerMakeScreen);
}