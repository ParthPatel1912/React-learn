import { combineReducers } from "redux";
import productSlice from './slices/productList'
import dataSlice from './slices/productData'

export const reducer = combineReducers({
    product: productSlice,
    data: dataSlice
})