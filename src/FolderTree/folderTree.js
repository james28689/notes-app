import "./folderTree.css";
import caret from "../Icons/caret.svg";
import { Context } from "../store";
import React, { useContext, useState } from "react";
import Popup from "../Popup/Popup";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

function Folder(props) {
  const [open, setOpen] = useState(props.open);

  const ToggleShow = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* <ContextMenuTrigger id={toString(props.id)}> */}
      <div className={"folder " + (open ? "" : "closed")}>
        <ContextMenuTrigger id={props.item.id.toString()}>
          <div onClick={ToggleShow} name={props.item.name} className="folderInfo">
            <img className="icon" src={caret} alt=">"></img>

            {props.item.name}
          </div>
        </ContextMenuTrigger>
        <div className="folderChildren">{props.children}</div>
      </div>
      <RightClickMenu id={props.item.id} item={props.item}></RightClickMenu>
    </div>
  );
}

function File(props) {
  const [state, dispatch] = useContext(Context);

  const openFile = () => {
    dispatch({ type: "SET_OPEN_FILE", payload: props.item.id });
    dispatch({ type: "SET_PAGE", payload: 0 });
  };

  return (
    <div>
      <ContextMenuTrigger id={props.item.id.toString()}>
        <div
          className={"file " + (props.item.id === state.openFile ? "openFile" : "")}
          onClick={openFile}
        >
          {props.item.title}
        </div>
      </ContextMenuTrigger>
      <RightClickMenu id={props.item.id} item={props.item}></RightClickMenu>
    </div>
  );
}

function RightClickMenu(props) {
  const [state, dispatch] = useContext(Context);
  
  if(props.item.type === "folder") {
    var parentId = props.item.id;
  } else {
    var parentId = props.item.parentId;
  }

  const newFile = () => {
    var name = prompt("Enter title:", "New file");
    console.log(name, parentId, "<h1>" + name + "</h1>");
  }
  
  return (
    <ContextMenu id={props.id.toString()}>
      <MenuItem onClick={newFile}>
        New File
      </MenuItem>
      <MenuItem onClick={() => {}}>
        New Folder
      </MenuItem>
      <MenuItem onClick={() => {}}>
        Delete
      </MenuItem>
    </ContextMenu>
  );
}

function RenderTree(props) {
  var item = props.item;
  return (
    <div>
      {item.map((item, key) => {
        if (item.type === "folder") {
          return (
            <Folder
              key={key}
              item={item}
              open={item.children.length > 0 ? true : false}
              children={<RenderTree item={item.children}></RenderTree>}
            ></Folder>
          );
        }
        return <File key={key} item={item}></File>;
      })}
    </div>
  );
}

function list_to_tree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== null) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  console.log("output from list_toroots");
  return roots;
}

function FolderTree() {
  const [state] = useContext(Context);

  return <RenderTree item={list_to_tree(state.NotesData)}></RenderTree>;
}

export default FolderTree;
