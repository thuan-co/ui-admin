import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrandDto } from "../../../models/brand";

const initialState:BrandDto = {
    name: '',
    logo: '',
    field: '',
}

const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {

        makeNewBrand(state, action:PayloadAction<BrandDto>){
            let tmpBrand = state
            tmpBrand = action.payload
            return tmpBrand
        },
        failedMakeNewBrand(state, action:PayloadAction<string>){
            let tmpBrand = state
            tmpBrand.field = '';
            tmpBrand.name = '';
            tmpBrand.logo = '';
            return tmpBrand
        },
        successMakeNewBrand(state, action:PayloadAction<string>) {},
    }
})
// Actions
export const brandActions = brandSlice.actions;

// Reducers
const brandReducers = brandSlice.reducer;
export default brandReducers
