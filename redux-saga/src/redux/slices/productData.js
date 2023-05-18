import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	qty: 1
}

const dataSlice = createSlice({
	name: 'data',
	initialState: initialState,
	reducers: {
		addToCart(state, action) {
			const cartData = state.data.filter(item => item.id === action.payload.id);
			return {
				...state,
				data: [...state.data, action.payload],
				qty: cartData.length
			}
		},
		removeFromCart(state, action) {
			const cartData = state.data.filter(item => item.id !== action.payload)
			return {
				data: [...cartData]
			}
		}
	},
});

export const { addToCart, removeFromCart } = dataSlice.actions;
export default dataSlice.reducer;
