import React from 'react';
import TodoItem from './TodoItem';


function TodoItems(){
 return (
    <div className="todo-items">
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
    </div>
 )
}

export default TodoItems;