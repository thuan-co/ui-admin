import { Laptop } from "../models"
import { ListResponse } from "../models/common"
import axiosClient from "./axiosClient"


const productApi = {
    getAll() {
        const url = '/items'
        axiosClient.get<Laptop[]>(url).then(response => {

            return response;
        })
    }
}
export default productApi