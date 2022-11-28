import {all} from 'redux-saga/effects'
import productSaga from '../features/redux-saga/productSaga'

export default function* rootSaga() {
    yield all([productSaga()])
    // console.log("Root saga");
}