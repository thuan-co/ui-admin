import { AxiosResponse } from 'axios';
import { call, delay, fork, put } from 'redux-saga/effects';
import axiosClient from '../../constants/axiosClient';
import HookAPI from "../../constants/HookAPI";
import productApi from '../../constants/productApi';
import { Laptop } from '../../models';
import { productAction } from './productSlice';


function* fetchAllLaptops() {
    console.log("hello world !")
   
    yield delay(1000)
  
    const response:[] = yield call(HookAPI, '/items')
    
    console.log("Data: ", response.at(0))

    // const [result] = response;
    yield put(productAction.fetchDataSuccess(response.at(0) as any))
}

export default function* productSaga() {

    yield fork(fetchAllLaptops);
}