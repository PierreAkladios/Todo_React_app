import React from "react";
import ReactDom from "react-dom";
import "./index.css"; //tell the bundle tool to regroup all the files with the same name.
import TodoList from "./TodoList";

var destination = document.querySelector("#container");//location
//print in appropriate location 8:34
ReactDom.render(
  //instance of TodoList componement
  <div>
  <TodoList/>
  </div>,
  destination
)
