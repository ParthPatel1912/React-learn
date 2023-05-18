export const AddTodo = (data) => {
    return {
        type: 'AddTodo',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const DeleteTodo = (id) => {
    return {
        type: 'DeleteTodo',
        id: id
    }
}

export const EditTodo = (id) => {
    return {
        type: 'EditTodo',
        id: id
    }
}

export const UpdateTodo = (id, data) => {
    return {
        type: 'UpdateTodo',
        payload: {
            UpadteId: id,
            UpdateData: data
        }
    }
}

export const ClearTodo = () => {
    return {
        type: 'ClearTodo'
    }
}