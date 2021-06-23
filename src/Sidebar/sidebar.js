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
import Cookies from "js-cookies";

import { firebaseExport, auth, firestore } from "../firebase"

import { useCollectionData } from "react-firebase-hooks/firestore"

function Sidebar(props) {
    const [state, dispatch] = useContext(Context);

    const notesRef = firestore.collection("notes");
    const query = notesRef.orderBy("createdAt", "desc");

    const [notes] = useCollectionData(query, { idField: "id" });

    useEffect(() => {
        // console.log(Cookies.getItem("userID"))
        // if (Cookies.getItem("userID") === null) {
        //     dispatch({type: 'SET_LOGIN', payload: false});
        // }
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
                { notes && notes.map(note => <h1> {note.title} </h1>) }
            </div>
            
            <div className="bottom">
                <UserOptions />
                <Search />
            </div>
            
        </div>
    )
}

export default Sidebar;