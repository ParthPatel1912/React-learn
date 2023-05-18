import { PRODUCT_LIST, PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_SEARCH } from '../../assets/constant/sagaConstant'

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