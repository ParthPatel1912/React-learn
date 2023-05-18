import { createSlice } from '@reduxjs/toolkit'
import userSlice from "./slices/UserSlices";

const adminSlice = createSlice({
    name: "admin",
    initialState: [],
    extraReducers(builder){
        builder.addCase(userSlice.actions.addUser, (state, action) => {
            return state.push(action.payload)
        })
    }
});

export default adminSlice;