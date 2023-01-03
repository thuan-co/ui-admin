import { call, fork, put, take } from "redux-saga/effects";
import { cameraActions } from "./cameraSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CameraDto } from "../../../models";
import PhoneApi from "../../../constants/phoneApi";
import { POST } from "../../../constants/method.httprequest";
import { updatingPhoneActions } from "../phone/updateSlice";

function* handleMakeCamera(action: PayloadAction<CameraDto[]>) {

    const [result, error]:any[] = yield call(PhoneApi, '/create/cameras', action.type,POST, action.payload)
    if (result) {
        console.log("Data return from server: ", result);
        yield put(cameraActions.makeSuccessCamera(result))
        yield put(updatingPhoneActions.updatingFCameraForPhone(result.at(0).id))
    }
    // ... do something when occurs errors
}
function* workerMakeCamera() {
    const action:PayloadAction<CameraDto[]> = yield take(cameraActions.makeNewCamera)
    
    yield fork(handleMakeCamera, action)
}

export function* watcherMakeNewCamera(){
    yield fork(workerMakeCamera)
}