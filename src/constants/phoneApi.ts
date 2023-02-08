import axios from 'axios';
import { phoneActions } from '../features/redux-saga/phone/phoneSlice';
import { NewPhoneReq, PhoneReq } from '../models';
import * as methodTypes from './method.httprequest';
import { batteryActions } from '../features/redux-saga/battery/batterySlice';
import { connectActions } from '../features/redux-saga/connect/connectSlice';
import { cameraActions } from '../features/redux-saga/camera/cameraSlice';
import { screenActions } from '../features/redux-saga/screen/screenSlice';
import { updatingPhoneActions } from '../features/redux-saga/phone/updateSlice';

export default function PhoneApi(endpoint: string, action?:string, method?:string, data?:any) {
    
    const baseUrl = "http://localhost:8080/api/v1"
    let header = {
        'Content-Type': 'application/json'
    }
    if (method === methodTypes.GET || method == null) {

        console.log("Get all phone")
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

    else if (method === methodTypes.POST && action === updatingPhoneActions.updatingPhone.type) {
        return axios({
            method: method,
            url: baseUrl + endpoint,
            headers: header,
            data: data
        }).then(
            response => {
                const result = response.data
                return [result, null];
            }
        ).catch(error => {
            const errorMess = error.response.data
            console.log("Error occurs when call api", errorMess);
        })
    }

    else if (method === methodTypes.POST && action === screenActions.makeNewScreen.type) {

        return axios({
            method: method,
            url: baseUrl + endpoint,
            headers: header,
            data: data
        }).then(
            response => {
                const result = response.data

                return [result, null];
            }
        ).catch(error => {
            const errorMess = error.response.data
            console.log("Error occurs when call api", errorMess);
        }
        )
    }

    else if (method === methodTypes.POST && action === cameraActions.makeNewCamera.type) {
        return axios({
            method: method,
            url: baseUrl + endpoint,
            data: data,
            headers: header,
        }).then(
            response => {
                const result = response.data
                return [result, null]
            }
        ).catch(error => {
            const errorMess = error.response.data
            console.log("Error occurs when call api", errorMess);
        })
    }

    else if (method === methodTypes.POST && action === phoneActions.makeNewBasePhone.type) {
        
        // console.log("Create phone")
        return axios({
            method: methodTypes.POST,
            url: baseUrl + endpoint,
            data: data,
            headers: header,
        }).then(
            response => {
                const result = response.data

                // console.log("Result of data return by Spring boot", result)

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

    else if (method === methodTypes.POST && action === batteryActions.makeNewBattery.type) {
        
        return axios({
            method: methodTypes.POST,
            url: baseUrl + endpoint,
            headers: header,
            data: data,
        }).then(
            response => {
                const result = response.data
                // do something with data response...

                return [result, null]
            }
        ).catch(error => {
            if (error.response) {
                // do something ...
            }

            return [null, error.response.data]
        })
    }

    else if (method === methodTypes.POST && action === connectActions.makeNewConnectPhone.type) {
        
        return axios({
            method: methodTypes.POST,
            url: baseUrl + endpoint,
            headers: header,
            data: data,
        }).then(
            response => {
                const result = response.data
                // do something with data response...

                return [result, null]
            }
        ).catch(error => {
            if (error.response) {
                // do something ...
            }

            return [null, error.response.data]
        })
    }
}