import { USER_SIGNUP, USER_NAME_UPDATE, USER_PASSWORD_UPDATE } from '../../assets/constant/sagaConstant'
import { takeEvery, put } from 'redux-saga/effects';
import { signupUser, updateUserName, updateUserPassword } from '../slices/UserData'

function* addUser(action) {
	try {
		yield put(signupUser(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* UserNameUpdate(action) {
	try {
		yield put(updateUserName(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* UserPasswordUpdate(action) {
	try {
		yield put(updateUserPassword(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* userSaga() {
	yield takeEvery(USER_SIGNUP, addUser)
	yield takeEvery(USER_NAME_UPDATE, UserNameUpdate)
	yield takeEvery(USER_PASSWORD_UPDATE, UserPasswordUpdate)
}

export default userSaga