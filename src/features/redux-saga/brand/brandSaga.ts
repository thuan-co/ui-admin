import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import BrandApi from "../../../constants/brandApi";
import * as methodTypes from '../../../constants/method.httprequest';
import { BrandDto } from "../../../models/brand";
import { brandActions } from "./brandSlice";
import {toast} from 'react-hot-toast';
import { listBrandsActions } from "./listBrandSlice";

function notifyCreateNewBrand(content:string, isSuccess:boolean) {

    if (isSuccess) {
        toast.success(content)
    }
    else {
        toast.error(content)
    }
    
}

function* watchNewBrandAsync(action: PayloadAction<BrandDto>) {

    yield delay(1000)

    console.log("Data in state", action.payload)

    const [result, error] : any[] = yield call(BrandApi, '/brand', brandActions.makeNewBrand.type, methodTypes.POST, action.payload)

    if (result) {
        console.log("Data return from server: ", result)
        notifyCreateNewBrand(result, true)
    }
    else if (error) {
        notifyCreateNewBrand(error, false)
    }
}

function* watchMakeNewBrand() {
    yield takeLatest(brandActions.makeNewBrand, watchNewBrandAsync)
}

function* workGetBrands() {
    
    // yield delay(1000) 
    const [result, error] : any[] = yield call(BrandApi, '/all')
    if (result) {

        console.log("Data return from server: ", result)
        yield put(listBrandsActions.fetchSuccess(result))
        
    }
    else if (error) {
        // TODO: Toast error.
        console.log(error)
    }
    
}

function* watchGetAllBrands() {
    // console.log("watcher sage get all brands")
    yield takeLatest(listBrandsActions.fetchAllBrands, workGetBrands)
}

export function* getListBrands() {
    console.log("Saga for get all brands")
    yield fork(watchGetAllBrands)
}

export default function* newBrandSaga() {
    console.log("Saga for make new brand")
    yield fork(watchMakeNewBrand)
}