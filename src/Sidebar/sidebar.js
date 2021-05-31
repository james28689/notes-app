import "./Sidebar.css";
import calendar from "../Icons/calendar.svg";
import notes from "../Icons/notes.svg";

import Divider from "../Divider/divider";
import Tab from "../SiderbarTab/tab";
import Search from "../Search/search";
import Logout from "../Login/logout";
import Tree from "../FolderTree/folderTree";

function Sidebar(props) {

    return (
        <div id="Sidebar">
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

            <Tree />

            <div className="bottom">
                <Logout />
                <Search />
            </div>
            
        </div>
    )
}

export default Sidebar;