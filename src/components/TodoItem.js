import React from 'react';

const handleOnchange = () => console.log('Changed!');

function TodoItem(props){
 console.log(props);  
 return (
    <div className="todo-item"> 
         <input 
           onChange={handleOnchange} 
           type="checkbox" 
           checked={props.todo.isComplete}
         />
         <p>{props.todo.text}</p>
    </div>
 )
};

export default TodoItem;