import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 0,
    userEmail: '',
    userName: ''
}

const sessionSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        sessionUser(state, action) {
            state.status = action.payload.status;
            state.userEmail = action.payload.email;
            state.userName = action.payload.name;
            return state;
        }
    },
});

export const { sessionUser } = sessionSlice.actions;
export default sessionSlice.reducer;
