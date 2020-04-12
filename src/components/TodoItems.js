import React from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';

function TodoItems(){
 const todos = todoData.map(todo => <TodoItem key={todo.id} list={todo}/>);  
 return (
    <div className="todo-items">
           { todos }
    </div>
 )
}

export default TodoItems;