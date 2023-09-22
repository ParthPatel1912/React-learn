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
                    updated = ([...state, { ...userRequestFound, status: action.payload.status }]);

                    const uniqueMap = updated.reduce((map, item) => {
                        const key = `${item.from}-${item.to}`;
                        if (!map.has(key) || (item.status === 1 || item.status === 0)) {
                            map.set(key, item);
                        }
                        return map;
                    }, new Map());
                    const uniqueParis = Array.from(uniqueMap.values());
                    return (uniqueParis.filter(item => item.status > 0));
                }
            }

        }
    },
});

export const { requestUser, requestUserUpdate } = requestSlice.actions;
export default requestSlice.reducer;
