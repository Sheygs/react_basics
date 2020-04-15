import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';

class TodoItems extends Component {
   constructor(){
      super();
      this.state = {
         items: todoData
      }
   }  
  render(){
    const { items } = this.state;
    const todos = items.map(todo => <TodoItem key={todo.id} todo={todo}/>)
    return (
       <div className="todo-items">
              { todos }
       </div>
    )
 }
}

export default TodoItems;