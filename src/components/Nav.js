import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <h1>nav</h1>
      <ul className="nav-links">
        <Link to="/">
          <li className="nav-page">Home</li>
        </Link>
        <Link to="/shop">
          <li className="nav-page">Shop</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
