import {all} from 'redux-saga/effects'
import watchMakeNewBattery from '../features/redux-saga/battery/batterySaga'
import newBrandSaga, { getListBrands } from '../features/redux-saga/brand/brandSaga'
import watchMakeNewPhoneConnect from '../features/redux-saga/connect/connectSaga'
import sendMessage from '../features/redux-saga/message/messageSaga'
import { newPhoneSaga, watcherUpdatingPhone } from '../features/redux-saga/phone/phoneSaga'
import productSaga from '../features/redux-saga/productSaga'
import watcherAuthAccount from '../features/redux-saga/auth/loginSaga'
import watcherMakingCpu, { watcherGetAllCpus } from '../features/redux-saga/cpu/cpuSaga'
import { watcherGetAllGpus, watcherMakeGpus } from '../features/redux-saga/gpu/gpuSaga'
import { watcherMakeNewCamera } from '../features/redux-saga/camera/cameraSaga'
import { watcherMakeScreen } from '../features/redux-saga/screen/screenSaga'
import { watcherSaveImgPhone } from '../features/redux-saga/img/imgSaga'

export default function* rootSaga() {
    // yield all([watcherMakeNewCamera()])
    yield all([watchMakeNewPhoneConnect(), watcherAuthAccount(), newPhoneSaga(), getListBrands(),  watcherMakingCpu(), newBrandSaga(), watcherGetAllCpus(), watcherGetAllGpus(),watcherMakeGpus(), watchMakeNewBattery(),watcherMakeNewCamera(),watcherMakeScreen(), watcherSaveImgPhone(), watcherUpdatingPhone()])
    // console.log("Root saga");
}