const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;