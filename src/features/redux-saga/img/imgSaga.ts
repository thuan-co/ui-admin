import { fork, put, take } from "redux-saga/effects";
import { imagePhoneActions } from "./imgSlice";

function* workerSaveImgPhone() {
    yield take(imagePhoneActions.save)
    yield put(imagePhoneActions.save)
}

export function* watcherSaveImgPhone() {
    yield fork(workerSaveImgPhone)
}