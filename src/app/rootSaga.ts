import {all} from 'redux-saga/effects'
import watchMakeNewBattery from '../features/redux-saga/battery/batterySaga'
import newBrandSaga, { getListBrands } from '../features/redux-saga/brand/brandSaga'
import watchMakeNewPhoneConnect from '../features/redux-saga/connect/connectSaga'
import sendMessage from '../features/redux-saga/message/messageSaga'
import newPhoneSaga from '../features/redux-saga/phone/phoneSaga'
import productSaga from '../features/redux-saga/productSaga'
import watcherAuthAccount from '../features/redux-saga/auth/loginSaga'
import watcherMakingCpu, { watcherGetAllCpus } from '../features/redux-saga/cpu/cpuSaga'
import { watcherGetAllGpus, watcherMakeGpus } from '../features/redux-saga/gpu/gpuSaga'

export default function* rootSaga() {
    // yield all([newBrandSaga(), getListBrands(), newPhoneSaga(), watchMakeNewBattery(), watchMakeNewPhoneConnect()])
    yield all([watchMakeNewPhoneConnect(), watcherAuthAccount(), newPhoneSaga(), getListBrands(),  watcherMakingCpu(), newBrandSaga(), watcherGetAllCpus(), watcherGetAllGpus(),watcherMakeGpus()])
    // console.log("Root saga");
}