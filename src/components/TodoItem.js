import React from 'react';

// const handleOnchange = () => console.log('Changed!');

function TodoItem(props){
 // console.log(props);
 const { todo } = props;
 const styles = {
   textDecoration: todo.isComplete  && "line-through",
   color: todo.isComplete && "grey"
 }
 return (
    <div className="todo-item"> 
         <input 
           onChange={ () => props.handleOnChange(todo.id) } 
           type="checkbox" 
           checked={todo.isComplete}
         />
         <p style={styles}>{todo.text}</p>
    </div>
 )
};

export default TodoItem;