import { PRODUCT_LIST, PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_SEARCH, PRODUCT_CART_ADD, PRODUCT_CART_SUB } from '../../assets/constant/sagaConstant'

export const productList = () => {
	return {
		type: PRODUCT_LIST,
	};
};

export const productAdd = (data) => {
	return {
		type: PRODUCT_ADD,
		payload: data
	};
};

export const productRemove = (id) => {
	return {
		type: PRODUCT_REMOVE,
		payload: id
	};
};

export const productSearch = (data) => {
	return {
		type: PRODUCT_SEARCH,
		payload: data
	};
};

export const productCartAdd = (id) => {
	return {
		type: PRODUCT_CART_ADD,
		payload: id
	};
};

export const productCartSubtract = (id) => {
	return {
		type: PRODUCT_CART_SUB,
		payload: id
	};
};