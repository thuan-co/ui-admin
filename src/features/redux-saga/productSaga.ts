import { call, fork, put } from 'redux-saga/effects';
import HookAPI from "../../constants/HookAPI";
import { productAction } from './productSlice';


function* fetchAllLaptops() {

    console.log("hello world !")

    // const response:[] = yield call(HookAPI, '/items')
    
    // console.log("Data: ", response.at(0))

    const [response, error] : any[] = yield call(HookAPI, '/items')
    console.log("Data :", response)
    yield put(productAction.fetchDataSuccess(response))

    // yield put(productAction.fetchDataSuccess(response.at(0) as any))
}

export default function* productSaga() {

    yield fork(fetchAllLaptops);
}