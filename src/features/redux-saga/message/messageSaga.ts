import { PayloadAction } from "@reduxjs/toolkit"
import { delay, fork, put, takeLatest } from "redux-saga/effects"
import { Message } from "../../../models/message"
import { messageActions } from "./messageSlice"

function* workSendMessage(action: PayloadAction<Message>) {
    
    console.log("work send message", action.payload)
    yield delay(1000)
    yield put(messageActions.notificationSuccess(action.payload))

}

function* watchSendMessage() {
    yield takeLatest(messageActions.notification, workSendMessage)
    // yield delay(1000)
}

export default function* sendMessage() {
    console.log("Send message Saga")
    yield fork(watchSendMessage)
}