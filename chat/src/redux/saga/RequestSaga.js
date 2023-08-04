import { REQUEST,REQUEST_UPDATE } from '../../assets/constant/sagaConstant'
import { takeEvery, put } from 'redux-saga/effects';
import { requestUser,requestUserUpdate } from '../slices/RequestData'

function* manageRequestData(action) {
	try {
		yield put(requestUser(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* UpdateRequestData(action) {
	try {
		yield put(requestUserUpdate(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* requestSaga() {
	yield takeEvery(REQUEST, manageRequestData);
	yield takeEvery(REQUEST_UPDATE, UpdateRequestData);
}

export default requestSaga