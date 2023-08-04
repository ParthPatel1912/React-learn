import { PRODUCT_LIST, PRODUCT_ADD, PRODUCT_REMOVE, PRODUCT_SEARCH, PRODUCT_CART_ADD, PRODUCT_CART_SUB } from '../../assets/constant/sagaConstant'
import { takeEvery, call, put } from 'redux-saga/effects';
import { listActivityApi } from '../api/productAPI'
import { listActivity, serchProduct } from '../slices/productList'
import { addToCart, removeFromCart, cartProductAdd, cartProductSub } from '../slices/productData'
import { MyAction } from '../../assets/constant/interface';

function* getProducts(): any {
	try {
		let result = yield call(listActivityApi);
		yield put(listActivity(result));
	} catch (error) {
		console.error('saga', error);
	}

	// let data = yield fetch('https://fakestoreapi.com/products');
	// data = yield data.json();
	// console.warn("action is called", data)
	// yield put(listActivity(data))
}

function* addProduct(action: MyAction) {
	try {
		yield put(addToCart(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* removeProduct(action: MyAction) {
	try {
		yield put(removeFromCart(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* searchProduct(action: MyAction) {
	try {
		yield put(serchProduct(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* addProductCart(action: MyAction) {
	try {
		yield put(cartProductAdd(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* subProductCart(action: MyAction) {
	try {
		yield put(cartProductSub(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* productSaga() {
	yield takeEvery(PRODUCT_LIST, getProducts)
	yield takeEvery(PRODUCT_ADD, addProduct)
	yield takeEvery(PRODUCT_REMOVE, removeProduct)
	yield takeEvery(PRODUCT_SEARCH, searchProduct)
	yield takeEvery(PRODUCT_CART_ADD, addProductCart)
	yield takeEvery(PRODUCT_CART_SUB, subProductCart)
}

export default productSaga