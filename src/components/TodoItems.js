import React, { Component } from 'react';
import TodoItem from './todo/TodoItem';
import todoData from './todo/todoData';

class TodoItems extends Component {
   constructor(){
      super();
      this.state = {
         items: todoData
      }
      this.handleOnChange = this.handleOnChange.bind(this);
   }  

  handleOnChange(id){
      this.setState(previousState => {
         const updatedItems = previousState.items.map( item => item.id === id ? item.isComplete = !item.isComplete : item);
         return updatedItems;
      })
  }

  render(){
    const { items } = this.state;
    const todos = items.map(todo => 
      <TodoItem 
        handleOnChange={this.handleOnChange} 
        key={todo.id} 
        todo={todo}
      />
    );
    return (
       <div className="todo-items">
              { todos }
       </div>
    );
 }
}

export default TodoItems;