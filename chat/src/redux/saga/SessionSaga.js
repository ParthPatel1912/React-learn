import { SESSION } from '../../assets/constant/sagaConstant'
import { takeEvery, put } from 'redux-saga/effects';
import { sessionUser } from '../slices/SessionData'

function* addSessionData(action) {
	try {
		yield put(sessionUser(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* sessoinSaga() {
	yield takeEvery(SESSION, addSessionData);
}

export default sessoinSaga