import axios from 'axios';
import { cpuActions } from '../features/redux-saga/cpu/cpuSlice';
import { CpuReq } from '../models/cpu';
import * as methodTypes from './method.httprequest';

export default function CpuApi(endpoint: string, action?:string, method?:string, data?:CpuReq) {
    
    const baseUrl = "http://localhost:8080/api/v1"
    let header = {
        'Content-Type': 'application/json'
    }
    if (method === methodTypes.GET || method == null) {

        console.log("Get all cpu")
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

    else if (method === methodTypes.POST && action === cpuActions.makeNewCpu.type) {
        
        // console.log("Create phone")
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