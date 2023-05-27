import { configureStore } from "@reduxjs/toolkit";
import productSaga from '../redux/saga/productSaga'
import createSagaMiddleware from 'redux-saga'
import { reducer } from "./reducers";


const sagaMiddleware = createSagaMiddleware();

const storetoolkit = configureStore({
    reducer: reducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(productSaga);

export default storetoolkit