import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const chatSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        userChat(state, action) {
            return ([...state, action.payload])
        },
        deleteuserChat(state, action) {
            const userDeletedData = state.filter(item => ((item.from === action.payload.from) && (item.to === action.payload.to)) || ((item.to === action.payload.from) && (item.from === action.payload.to)));
            // return ([...state, action.payload])
            // console.log(JSON.stringify(state.includes(userDeletedData)));
            // return ([...state]);
            const filteredArray = state.filter((item1) => {
                return !userDeletedData.some((item2) => (
                  item1.from === item2.from &&
                  item1.to === item2.to &&
                  item1.time === item2.time &&
                  item1.message === item2.message
                ));
              });
            return ([...filteredArray]);
        },
    },
});

export const { userChat, deleteuserChat } = chatSlice.actions;
export default chatSlice.reducer;
