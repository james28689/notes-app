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
            var changedNotesData = state.NotesData;
            
            if(index !== -1) {
                changedNotesData[index].content = action.payload;
            }
            console.log("UPDATE_NOTE", changedNotesData);

            // const updatedNotesRes = fetch(`https://api.watling.dev/note/update/${changedNotesData[index].id}`, {
            //     credentials: "include",
            //     method: "PUT",
            //     mode: "cors",
            //     body: changedNotesData[index]
            // })

            var xhr = new XMLHttpRequest();
            var url = `https://api.watling.dev/note/update/${changedNotesData[index].id}`;
            xhr.open("PUT", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.withCredentials = true;
            var data = JSON.stringify(changedNotesData[index])
            xhr.send(data);

            return {
                ...state,
                NotesData: changedNotesData
            }
        case "LOAD_NOTE":
            // state.NotesData = action.payload;

            // console.log(state);

            return {
                ...state,
                NotesData: action.payload
            }

        case "CHANGE_THEME":
            console.log(action);
            return{
                ...state,
                theme: action.payload
            }

        default:
            return state;
    }
};

export default Reducer;