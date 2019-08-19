import React from 'react';
import TodoItem from './components/TodoItem';
import './app.css';
const App = () => {
  return (
    <div className="todo-list">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  )
}


export default App;