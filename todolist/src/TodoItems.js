import React, {Component} from "react";
//initialise class
class TodoItems extends Component{
  //create a key/value for each item in the list
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
  render(){
    var todoEntries = this.props.entries; //get the entries form the props in TodoList
    var listItems = todoEntries.map(this.createTasks); //iterate through the items
    //printing on to the screen
    return(
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}
export default TodoItems;
//make sure it is understood by the bundler
