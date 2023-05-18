const reducer = (state, action) => {
    if (action.title === 'Increment') {
        return (state += 1);
    }
    if (action.title === 'Decrement') {
        let num = 0;
        state > 0 ? (num = state - 1) : (num = 0);
        return num;
    }
    return state;
}

export default reducer