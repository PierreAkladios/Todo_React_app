import React, {Component} from "react";

class TodoList extends Component{
  render(){
    //place to enter information
    return (
      <div className="TodoListMain">
        <div className="header">

          <form>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
            </form>
          </div>
      </div>
    );
  }
}
//other parts of the app can reference it
export default TodoList;
