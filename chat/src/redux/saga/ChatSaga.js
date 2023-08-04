import { CHAT, CHAT_DELETE } from '../../assets/constant/sagaConstant'
import { takeEvery, put } from 'redux-saga/effects';
import { userChat, deleteuserChat } from '../slices/ChatData'

function* manageChatData(action) {
	try {
		yield put(userChat(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* deleteChatData(action) {
	try {
		yield put(deleteuserChat(action.payload));
	} catch (error) {
		console.error('saga', error)
	}
}

function* requestSaga() {
	yield takeEvery(CHAT, manageChatData);
	yield takeEvery(CHAT_DELETE, deleteChatData);
}

export default requestSaga