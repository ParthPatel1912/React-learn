import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
// 	data: [],
// }

const initialState = []

const dataSlice = createSlice({
	name: 'data',
	initialState: initialState,
	reducers: {
		addToCart(state, action) {
			const newData = state.find(item => item.id === action.payload.id)
			if (typeof newData !== 'undefined') {
				const updated = ([...state, { ...newData, id: newData.id, qty: newData.qty + 1 }]);

				return [...new Map(updated.map(item =>
					[item['id'], item])).values()];

			} else {
				return ([...state, action.payload])
			}
		},
		removeFromCart(state, action) {
			const cartData = state.filter(item => item.id !== action.payload)
			return ([...cartData])
		},
		cartProductAdd(state, action) {
			const newData = state.find(item => item.id === action.payload)
			if (newData.qty < 7) {
			const updated = ([...state, { ...newData, id: action.payload, qty: newData.qty + 1 }]);
			return [...new Map(updated.map(item =>
				[item['id'], item])).values()];
			}
		},
		cartProductSub(state, action) {
			const newData = state.find(item => item.id === action.payload)
			if (newData.qty > 1) {
				const updated = ([...state, { ...newData, id: action.payload, qty: newData.qty - 1 }]);
				return [...new Map(updated.map(item =>
					[item['id'], item])).values()];
			}
		}
	},
});

export const { addToCart, removeFromCart, cartProductAdd, cartProductSub } = dataSlice.actions;
export default dataSlice.reducer;
