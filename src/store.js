
import React, {createContext, useReducer} from "react";
import Reducer from './reducer'


const initialState = {
    selected: 0,
    loggedIn: false,
    selectedDay: 25,
    apiKey: null,

    folderTreeState: [
        {
        name: "School",
        id: "asdasdvsfsd",
        open: true,
        type: "folder",
        children: [
            {
                name: "Physics",
                id: "skjdflsajdnv",
                type: "folder",
                open: true,
                children: [
                    {
                        name: "Revision",
                        type: "file",
                        id: "sfsdfsdf"
                    }
                ]
            },

            {
                name: "Exam Timetable",
                type: "file",
                id: "dfgdfg"
            }
        ]
        },

        
    ]
    
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