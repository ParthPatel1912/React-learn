import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            // state.push(action.payload) 
            return [...state, action.payload];
        },
        removeUser(state, action) {
            // console.log("file: UserSlices.jsx:12 ~ removeUser ~ action:", state[action.payload.id])
            // state.splice(action.payload, 1)
            // return [...state, { [action.payload.id] : action.payload.row}]
            // const arrayUniqueByKey = [...new Map(state.filter((it) => it[action.payload.id] !== action.payload.row).map(item =>
            //     [item[action.payload.id], item])).values()];

            // return [...state, arrayUniqueByKey];
        },
        clearUsers() {
            return [];
        }
    }
})
// console.log("file: UserSlices.jsx:12 ~ userSlice:", userSlice.actions)


export default userSlice;
export const { addUser, removeUser, clearUsers } = userSlice.actions;