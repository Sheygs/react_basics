import React from 'react';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired
}

export default TodoItem;