import { firestore } from "./firebase"

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
            console.log("UPDATE_NOTE", changedNotesData, action);

            changedNotesData.forEach(note => {
                console.log(note)
                const noteRef = firestore.collection("notes").doc(note.id);
                return noteRef.update({
                    content: note.content,
                    date: note.date,
                    parentID: note.parentID,
                    title: note.title,
                    userID: note.userID
                })
            })

            return {
                ...state,
                NotesData: changedNotesData
            }
        case "LOAD_NOTE":
            // state.NotesData = action.payload;

            // console.log(state);

            console.log(action.payload);

            return {
                ...state,
                NotesData: action.payload
            }

        case "CHANGE_THEME":
            console.log(action);
            localStorage.setItem("theme", action.payload)
            return{
                ...state,
                theme: action.payload
            }

        default:
            return state;
    }
};

export default Reducer;