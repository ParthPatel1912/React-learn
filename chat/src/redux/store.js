import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { reducer } from "./reducers";
import userSaga from "./saga/UserSaga";
import sessoinSaga from "./saga/SessionSaga";
import requestSaga from "./saga/RequestSaga";
import chatSaga from "./saga/ChatSaga";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const storetoolkit = configureStore({
    reducer: reducer,
    // reducer: persistedReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(userSaga);
sagaMiddleware.run(sessoinSaga);
sagaMiddleware.run(requestSaga);
sagaMiddleware.run(chatSaga);

// export default storetoolkit
// export const persistor = persistStore(storetoolkit);

// persistor.purge();