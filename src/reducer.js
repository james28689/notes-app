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
        case 'SET_OPEN_FILE':
            return {
                ...state,
                openFile: action.payload
            }
        case 'UPDATE_NOTE':
            var index = state.NotesData.findIndex((x => x.id === state.openFile));
            
            if(index !== -1) {
                state.NotesData[index].content = action.payload;
            }
            console.log("UPDATE_NOTE");

            return {
                ...state,

            }
        case "LOAD_NOTE":
            // state.NotesData = action.payload;

            // console.log(state);

            return {
                ...state,
                NotesData: action.payload;
            }

        default:
            return state;
    }
};

export default Reducer;