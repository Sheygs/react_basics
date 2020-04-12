import React from 'react';


function TodoItem(props){
 console.log(props);  
 return (
    <div className="todo-item"> 
         <input type="checkbox"/>
         <p>{props.list.text}</p>
    </div>
 )
};

export default TodoItem;