import axios from "axios"
import * as methodTypes from './method.httprequest'
import { loginAction } from "../features/redux-saga/auth/loginSlice";
import { LoginDto } from "../models/admin";

export default function HookAPI(endpoint: string , action?: string , method?:string, data?:LoginDto) {
    // axios.defaults.withCredentials = true;
    const baseAPI = "http://localhost:8087/api/v1/";

    
    // if (Cookies.get("jwt_token")) {
    //     header = {
    //         "Authorization": "Bearer " + Cookies.get("jwt_token"),
    //     }
    // }
    if (method === methodTypes.GET || method === null) {

        // console.log("Data account sent to server: ", data)

        return axios({
            method: methodTypes.GET,
            url: baseAPI + endpoint,
            // headers: header
        }).then(
            response => {
                const responseData = response.data;
                // if (showMessage)
                // message.success({ title: "Thông báo", description: responseData.message }, {
                //     width: Math.min(window.innerWidth * 0.8, 400) + "px"
                // })


                return [responseData, null];
            }
        ).catch(error => {
                if (error.response) {
                    const errorResponse = error.response.data;
                    console.log("Error: ", errorResponse)
                    // message.error({ title: "Lỗi", description: errorResponse.data }, {
                    //     width: Math.min(window.innerWidth * 0.8, 400) + "px"
                    // })
                }
                return [null, error.response.data];

            }
        );


    } else if (method === methodTypes.POST && action === loginAction.fetchAccount.type) {

        let header = {
            'Content-Type': 'application/json'
        };

        return axios(baseAPI + endpoint, {

            method: method,
            data: data,
            headers: header

        }).then(response => {
            
                const responseData = response.data;

                // console.log("Data return from server: ", responseData)

                return [responseData, null];
            }
        ).catch(error => {
            if (error.response) {
                const errorResponse = error.response.data;

            }
            return [null, error.response.data];

        });
    }
}