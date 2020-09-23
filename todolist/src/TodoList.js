import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component{
  constructor(props){
    super(props);
    //state to store values in an array
    this.state = {
      items: []
    };
    //binding the value
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    //checking that the item is not empty
    if(this._inputElement.value !== ""){
      var newItem = {
        text: this._inputElement.value,
        key: Date.now() //time lapse which will be used to make sure the task is unique like an ID
      };
    //adding item in the previous state of an array using concatination
    this.setState((prevState) => {
      return{
        items: prevState.items.concat(newItem)
      };
    });
    }
    //clearing the value that has been submited
    this._inputElement.value = "";
    //to be able to test in browser by inspecting the code in log
    console.log(this.state.items);
    //overiding the default behaviour of the from which refreches automaticly
    e.preventDefault();
  }
  //use console.log() to debug the errors

  //method to handle all the delete functionalities to keep the state up to Date
  deleteItem(key){
    //filter method to remove any item that happens to match the current key
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }
  render(){
    //place to enter information
    return (
      <div className="todoListMain">
        <div className="header">

          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter task">
            </input>
            <button type="submit">add task</button>
            </form>
          </div>
          <TodoItems entries= {this.state.items}
                     delete={this.deleteItem}/>
      </div>
    );
  }
}
//other parts of the app can reference it
export default TodoList;
