import {all} from 'redux-saga/effects'
import newBrandSaga, { getListBrands } from '../features/redux-saga/brand/brandSaga'
import sendMessage from '../features/redux-saga/message/messageSaga'
import productSaga from '../features/redux-saga/productSaga'

export default function* rootSaga() {
    yield all([newBrandSaga(), sendMessage(), getListBrands()])
    // console.log("Root saga");
}