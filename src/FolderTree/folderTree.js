import "./folderTree.css";
import caret from "../Icons/caret.svg";
import { Context } from "../store";
import React, { useContext, useState } from "react";

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
        <ContextMenuTrigger id={props.id.toString()}>
          <div onClick={ToggleShow} name={props.name} className="folderInfo">
            <img className="icon" src={caret} alt=">"></img>

            {props.name}
          </div>
        </ContextMenuTrigger>
        <div className="folderChildren">{props.children}</div>
      </div>
      <RightClickMenu id={props.id}></RightClickMenu>
    </div>
  );
}

function File(props) {
  const [state, dispatch] = useContext(Context);

  const openFile = () => {
    dispatch({ type: "SET_OPEN_FILE", payload: props.id });
    dispatch({ type: "SET_PAGE", payload: 0 });
  };

  return (
    <div>
      <ContextMenuTrigger id={props.id.toString()}>
        <div
          className={"file " + (props.id === state.openFile ? "openFile" : "")}
          onClick={openFile}
        >
          {props.name}
        </div>
      </ContextMenuTrigger>
      <RightClickMenu id={props.id}></RightClickMenu>
    </div>
  );
}

function RightClickMenu(props) {
  const newFile = () => {
    console.log("new file");
  }
  
  return (
    <ContextMenu id={props.id.toString()}>
      <MenuItem
        data={{ foo: "bar" }}
        onClick={newFile}
      >
        New File
      </MenuItem>
      <MenuItem data={{ foo: "bar" }} onClick={() => {}}>
        New Folder
      </MenuItem>
      <MenuItem data={{ foo: "bar" }} onClick={() => {}}>
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
              id={item.id}
              name={item.name}
              open={item.children.length > 0 ? true : false}
              children={<RenderTree item={item.children}></RenderTree>}
            ></Folder>
          );
        }
        return <File key={key} name={item.name} id={item.id}></File>;
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
