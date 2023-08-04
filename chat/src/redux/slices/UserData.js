import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const userSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        signupUser(state, action) {
            const userFound = state.filter(item => item.email === action.payload.email);
            if (userFound.length === 0) {
                return ([...state, action.payload])
            }
        },
        updateUserName(state, action) {
            const user = state.filter(item => (item.email === action.payload.email && item.name === action.payload.name));
            const user_parse = JSON.parse(JSON.stringify(user))
            const newData = {
                name: action.payload.updatedName,
                email: action.payload.email,
                password: user_parse[0].password
            }
            let updated;
            if (user.length === 1) {
                 updated = ([...state, newData])
            }

            return [...new Map(updated.map(item =>
                [item['email'], item])).values()];
        },
        updateUserPassword(state, action) {
            const user = state.filter(item => (item.email === action.payload.email && item.password === action.payload.password));
            const user_parse = JSON.parse(JSON.stringify(user))
            const newData = {
                name: user_parse[0].name,
                email: action.payload.email,
                password: action.payload.updatedPassword
            }
            let updated;
            if (user.length === 1) {
                 updated = ([...state, newData])
            }

            return [...new Map(updated.map(item =>
                [item['email'], item])).values()];
        }
    },
});

export const { signupUser, updateUserName, updateUserPassword } = userSlice.actions;
export default userSlice.reducer;
