import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div>
        <h1>To Do:</h1>
        <ul className="myApp">
           <li>Play</li>
          <li>Sleep</li>
          <li>Iron</li>
       </ul>
    </div> 
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

