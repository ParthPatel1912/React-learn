import { combineReducers } from "redux";
import userSlice from './slices/UserData';
import sessionSlice from './slices/SessionData';
import requestSlice from './slices/RequestData';
import chatSlice from './slices/ChatData';

export const reducer = combineReducers({
    user: userSlice,
    session: sessionSlice,
    request: requestSlice,
    chat: chatSlice
})