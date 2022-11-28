import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Laptop } from "../../models";

interface ProductsState {
    isLaptop: boolean;
    laptopsCurrent?: Laptop[],
}

const initialState: ProductsState = {
    isLaptop: true,
    laptopsCurrent: undefined,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchDataLaptop(state, action: PayloadAction<boolean>){

            state.isLaptop = action.payload;
            // state.laptopsCurrent = action.payload;
        },
        fetchDataSuccess(state, action: PayloadAction<Laptop[]>) {
            state.laptopsCurrent = action.payload;
        }
    },

})
// Action
export const productAction = productSlice.actions;

// Selector
export const selectListLaptops = (state:any) => state.products.laptopsCurrent;
// expott const selctL
// Reducer
const productsReducer = productSlice.reducer;
export default productsReducer;