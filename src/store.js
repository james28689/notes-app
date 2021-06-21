
import React, {createContext, useReducer} from "react";
import Reducer from './reducer'

var d = new Date();

const initialState = {
    selected: 1,
    loggedIn: false,
    selectedDay: d.getDay(),
    apiKey: null,
    theme: localStorage.getItem("theme") || "light",

    NotesData: [],
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