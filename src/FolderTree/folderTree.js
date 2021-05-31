import "./folderTree.css";
import caret from "../Icons/caret.svg";
import {Context} from '../store';
import React, {useContext, useState } from 'react';

function Folder(props) {
    const [open, setOpen] = useState(true);

    const ToggleShow = () => {
        setOpen(!open);
    }

    return (
        <div className={"folder " + (open ? "" : "closed") }>
            <div onClick={ToggleShow} name={props.name} className="folderInfo">
                <img src={ caret } alt=">"></img>
                { props.name }
            </div>
            <div className="folderChildren">
                { props.children }
            </div>
        </div>
    )
}

function File(props) {
    const openFile = () => {
        console.log(props.id);
    }

    return (
        <div className="file" onClick= {openFile}>
            {props.name}
        </div>

    );
}

function RenderTree(props) {
    var item = props.item;
    return (
        <div>
        {item.map((item, key) => {
            if(item.type === "folder") {
                return <Folder id={item.id} key={key} name={ item.name } open={item.open} children={<RenderTree item={item.children} ></RenderTree>}></Folder>
            }
            return (
                <File key={key} name={ item.name } id={ item.id }></File>
            )
        }
        )}
    </div>
    );
}

function FolderTree() {
    const [state] = useContext(Context);

    return (
        <RenderTree item={state.folderTreeState}></RenderTree>
    )
}

export default FolderTree;