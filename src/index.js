import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div className="container">
       <h1 className="title">My name is Olusegun</h1>
       <p>I am a self-taught developer who would build the next big thing!
         My top 3 vacations are: <br/>
       </p>
       <ul>
         <li>Bahamas</li>
         <li>Toronto</li>
         <li>New York</li>
       </ul>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

