
import React, {createContext, useReducer} from "react";
import Reducer from './reducer'

var d = new Date();

const initialState = {
    selected: 0,
    loggedIn: true,
    selectedDay: d.getDay(),
    apiKey: null,
    theme: localStorage.getItem("theme") || "light",

    NotesData: [
        { id: "1", parentId: null, name: "School", type: "folder" },
        { id: "2", parentId: "1",    name: "Computing", type: "folder" },
        { id: "4", parentId: "1",    name: "Exams", type: "folder" },
        { id: "6", parentId: "4",    name: "Exam Timetable", type: "file", content: "test content"},
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