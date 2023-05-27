import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const productSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {
		listActivity(state, action) {
			return [...action.payload]
		},
		serchProduct(state, action) {
			
		}
	},
});

export const { listActivity, serchProduct } = productSlice.actions;
export default productSlice.reducer;
