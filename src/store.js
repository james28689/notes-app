
import React, {createContext, useReducer} from "react";
import Reducer from './reducer'

var d = new Date();

const initialState = {
    selected: 0,
    loggedIn: false,
    selectedDay: d.getDay(),
    apiKey: null,

    NotesData: [
        { id: 1, parentId: null, name: "School", type: "folder" },
        { id: 2, parentId: 1,    name: "Physics", type: "folder" },
        { id: 3, parentId: 2,    name: "Revision", type: "file", content: "sdfasdf" },
        { id: 5, parentId: 2,    name: "Particles", type: "file", content: "tsds"},
        { id: 4, parentId: 1,    name: "Exam Timetable", type: "folder" },
        { id: 6, parentId: 4,    name: "Home", type: "file", content: "test content"}
    ],
    openFile: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;