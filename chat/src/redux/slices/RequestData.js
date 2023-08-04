import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const requestSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        // requestUser(state, action) {
        //     const userRequestFound = state.filter(item => (((item.from === action.payload.from) && (item.to === action.payload.to)) || ((item.to === action.payload.from) && (item.from === action.payload.to))));
        //     if (userRequestFound.length === 0) {
        //         return ([...state, action.payload])
        //     } else {
        //         const userRequestFound = state.find(item => (item.from === action.payload.from) && (item.to === action.payload.to))
        //         if (typeof userRequestFound !== 'undefined') {
        //             const updated = ([...state, { ...userRequestFound, status: action.payload.status }]);
        //             return [...new Map(updated.map(item =>
        //                 [item['from'], item] && [item['to'], item])).values()];
        //         }
        //     }
        // },
        requestUserUpdate(state, action) {
            const userRequestFound = state.find(item => (((item.from === action.payload.from) && (item.to === action.payload.to)) || ((item.to === action.payload.from) && (item.from === action.payload.to))))
            if (typeof userRequestFound === 'undefined') {
                return ([...state, action.payload])
            } else {
                let updated;
                if (typeof userRequestFound !== 'undefined') {
                    // if (action.payload.status === 1 || action.payload.status === 0) {
                        updated = ([...state, { ...userRequestFound, status: action.payload.status }]);
                    // } else {
                        // updated = ([...state, { ...userRequestFound, status: action.payload.status, from: action.payload.from, to: action.payload.to }]);
                        console.log("file: RequestData.js:33 ~ requestUserUpdate ~ updated:", JSON.stringify(updated));
                    // }
                    const new_data = [...new Map(updated.map(item =>
                        [item['from'], item] && [item['to'], item])).values()];
                    console.log("file: RequestData.js:37 ~ requestUserUpdate ~ new_data:", JSON.stringify(new_data));

                    console.log("file: RequestData.js:40 ~ requestUserUpdate ~ new_data.filter(item => item.status > 0):", JSON.stringify(new_data.filter(item => item.status > 0)));
                    return (new_data.filter(item => item.status > 0));
                }
            }

        }
    },
});

export const { requestUser, requestUserUpdate } = requestSlice.actions;
export default requestSlice.reducer;
