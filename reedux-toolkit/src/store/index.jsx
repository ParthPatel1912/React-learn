import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlices";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
// import adminSlice from "./slices/AdminSlices";

const persistConfige = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    users: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfige, reducer);

const storetoolkit = configureStore({
    // reducer: {
        // users: userSlice.reducer
    //     // admin: adminSlice.reducer
    // },
    reducer: persistedReducer
})

export default storetoolkit