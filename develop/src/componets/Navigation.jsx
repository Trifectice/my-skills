import React from 'react';
import { NavLink } from 'react-router-dom'; // Make sure to install react-router-dom if you haven't

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
