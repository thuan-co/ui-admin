import axios from "axios";
import { GpuDto } from "../models";
import { GET, POST } from "./method.httprequest";
import { gpuAction } from "../features/redux-saga/gpu/gpuSlice";

export default function GpuAPI(endpoint: string, action?: string, method?: string, data?:GpuDto){
    const baseUrl = "http://localhost:8080/api/v1/"
    let header = {
        'Content-Type': 'application/json'
    }

    if (method === GET || method == null) {

        console.log("Get all cpu")
        return axios({
            method: GET,
            url: baseUrl + endpoint,
            headers: header,
        }).then(
            response => {
                const result = response.data

                return [result, null];
            }
        )
    }
    else if (method === POST && action === gpuAction.makeNewGpu.type) {
        
        return axios({
            method: POST,
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