import React from 'react';

function TodoItem(props) {

 const { todo, handleOnChange } = props;
 const { id, text, isComplete } = todo;

 const styles = {
   textDecoration: "line-through",
   color: "grey",
   fontStyle: "italic"
 }

 return (
    <div className="todo-item"> 
         <input 
           onChange={ () => handleOnChange(id) } 
           type="checkbox" 
           checked={isComplete}
         />
         <p style={isComplete ? styles : null }>{text}</p>
    </div>
 )
};

export default TodoItem;