const initialData = {
    list: [],
    data: []
}

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "AddTodo":
            const { id, data } = action.payload

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            };

        case "DeleteTodo":

            const newData = state.list.filter((data) => data.id !== action.id)

            return {
                ...state,
                list: newData,
                data: []
            }

        case "EditTodo":

            const EditData = state.list.filter((data) => data.id === action.id)

            return {
                ...state,
                data: EditData
            }

        case "UpdateTodo":
            const { UpadteId, UpdateData } = action.payload
            // const newDataList = state.list.filter((newList) => newList.id === UpadteId).map((dataNew) => {
            //     return {
            //         ...dataNew,
            //         data: UpdateData
            //     }
            // })
            const updated = ([...state.list, {id: UpadteId, data: UpdateData}]);

            const arrayUniqueByKey = [...new Map(updated.map(item =>
                [item['id'], item])).values()];

            return {
                ...state,
                list: arrayUniqueByKey,
                data: []
            };

        case "ClearTodo":

            return {
                ...state,
                list: [],
                data: []
            }

        default: return state;
    }
}

export default todoReducer