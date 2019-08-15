import React from 'react';

const Navbar = () => {
  return (
    <div>
        <ul className = "navBar">
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#" className="cta-btn">Buy</a></li>
        </ul>
    </div>
  )
};


export default Navbar;