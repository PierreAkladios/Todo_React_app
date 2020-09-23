import React, {Component} from "react";
import "./TodoList.css";
import FlipMove from "react-flip-move";
//initialise class display of items
class TodoItems extends Component{
  constructor(props){
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  //create a key/value for each item in the list
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
  }
  //deleting the clicked item from the list
  delete(key){
    this.props.delete(key);
  }

  render(){
    var todoEntries = this.props.entries; //get the entries form the props in TodoList
    var listItems = todoEntries.map(this.createTasks); //iterate through the items
    //printing on to the screen
    //animation for items being deleted
    return(
      <ul className="theList">
      <FlipMove duration={150} easing="ease-out">
        {listItems}
      </FlipMove>
      </ul>
    );
  }
}
export default TodoItems;
//make sure it is understood by the bundler
