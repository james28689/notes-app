const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                selected: action.payload
            };
        case 'SET_LOGIN':
            return {
                ...state,
                loggedIn: action.payload
            };
        case 'SET_KEY':
            return {
                ...state,
                apiKey: action.payload
            };
        case 'SET_TREE':
            return {
                ...state,
                folderTreeState: action.payload
            }
        default:
            return state;
    }
};

export default Reducer;