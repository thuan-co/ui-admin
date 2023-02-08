import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrandResp } from "../../../models/brand";

const initialState:BrandResp[] = []

const listBrands = createSlice({

    name: 'listBrands',
    initialState, 
    reducers: {
        fetchAllBrands() {},
        fetchSuccess(state, action:PayloadAction<BrandResp[]>) {

            let tmpBrands = state
            tmpBrands = action.payload
            return tmpBrands
        }
    }
})

// Action
export const listBrandsActions = listBrands.actions

// Reducers
const listBrandsReducers = listBrands.reducer
export default listBrandsReducers