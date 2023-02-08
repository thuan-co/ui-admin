import axios from 'axios';
import { brandActions } from '../features/redux-saga/brand/brandSlice';
import { listBrandsActions } from '../features/redux-saga/brand/listBrandSlice';
import { BrandDto } from '../models/brand';
import * as methodTypes from './method.httprequest';

export default function BrandApi(endpoint: string, action?:string, method?:string, data?:BrandDto) {
    
    const baseUrl = "http://localhost:8080/api/v1"
    let header = {
        'Content-Type': 'application/json'
    }
    if (method === methodTypes.GET || method == null) {

        console.log("Get all brands")
        return axios({
            method: methodTypes.GET,
            url: baseUrl + endpoint,
            headers: header,
        }).then(
            response => {
                const result = response.data

                return [result, null];
            }
        )
    }

    // else if (method === null) {

    //     console.log('Get all brands from database')
    //     return axios({
    //         method: methodTypes.GET,
    //         url: baseUrl + endpoint,
    //         headers: header
    //     }).then(
    //         response => {
    //             const result = response.data

    //             return [result, null];
    //         }
    //     )
    // }

    else if (method === methodTypes.POST && action === brandActions.makeNewBrand.type) {
        
        console.log("Create brand")
        return axios({
            method: methodTypes.POST,
            url: baseUrl + endpoint,
            data: data,
            headers: header,
        }).then(
            response => {
                const result = response.data

                console.log("Result of data return by Spring boot", result)

                return [result, null];
            }
        ).catch(error => {
            if (error.response) {

                const errorRes = error.response.data;
                console.log("Error occurs when call api", errorRes)
            }
            
            return [null, error.response.data]
        })
    }
}