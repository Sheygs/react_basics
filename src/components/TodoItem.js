import React from 'react';

function TodoItem(props){
 // console.log(props);
 
 const { todo, handleOnChange } = props;

 const styles = {
   textDecoration: todo.isComplete  && "line-through",
   color: todo.isComplete && "grey",
   fontStyle: todo.isComplete && "italic"
 }

 return (
    <div className="todo-item"> 
         <input 
           onChange={ () => handleOnChange(todo.id) } 
           type="checkbox" 
           checked={todo.isComplete}
         />
         <p style={styles}>{todo.text}</p>
    </div>
 )
};

export default TodoItem;