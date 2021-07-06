import "./Sidebar.css";
import calendar from "../Icons/calendar.svg";
import notes from "../Icons/notes.svg";

import Divider from "../Divider/divider";
import Tab from "../SiderbarTab/tab";
import Search from "../Search/search";
import UserOptions from "../UserOptions/UserOptions";
import Tree from "../FolderTree/folderTree";
import React, {useContext, useEffect} from 'react';
import {Context} from '../store';

import { firebaseExport, auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

function Sidebar(props) {
    const [state, dispatch] = useContext(Context);

    var user = auth.currentUser;

    const notesRef = firestore.collection("notes");
    const query = notesRef.where("userID", "==", user.uid)

    const [notes] = useCollectionData(query, { idField: "id" });
    // console.log(notes)

    useEffect(() => {
        dispatch({type: "LOAD_NOTE", payload: notes})
    })


    return (
        <div id="Sidebar">

            <div className="top">
                <h1>Notes</h1>
                <Tab items= {[
                {
                    "name": "Notes",
                    "icon": notes
                },
                {
                    "name": "Calendar",
                    "icon": calendar
                }
                ]}/>
                <Divider />
            </div>

            <div className="middle">
                { notes && notes.map(note => <NoteTitle item={note} />) }
            </div>
            
            <div className="bottom">
                <UserOptions />
                <Search />
            </div>
            
        </div>
    )
}

function NoteTitle(props) {
    const [state, dispatch] = useContext(Context);

    const openFile = () => {
        dispatch({ type: "SET_OPEN_FILE", payload: props.item.id });
        dispatch({ type: "SET_PAGE", payload: 0 });
    };

    return(
        <div
          className={"file " + (props.item.id === state.openFile ? "openFile" : "")}
          onClick={openFile}
        >
            {props.item.title}
        </div>
    )
}

export default Sidebar;