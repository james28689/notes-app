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

function Sidebar(props) {
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        console.log(Cookies.getItem("userID"))
        if (Cookies.getItem("userID") === undefined) {
            dispatch({type: 'SET_LOGIN', payload: false});
        }
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
                <Tree />
            </div>
            
            <div className="bottom">
                <UserOptions />
                <Search />
            </div>
            
        </div>
    )
}

export default Sidebar;