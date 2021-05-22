import React from 'react';
import Cart from '../components/Cart';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-center">
        {/*//+ logo */}
        <h1 className="logo">BRAND</h1>
        {/*//+ links */}
        <ul className="nav-links">
          <NavLink to="/">
            <li className="nav-page">Home</li>
          </NavLink>
          <NavLink to="/shop">
            <li className="nav-page">Shop</li>
          </NavLink>
          <NavLink to="/about">
            <li className="nav-page">About</li>
          </NavLink>
        </ul>
      </div>
      {/*//+ cart */}
      <Cart />
    </div>
  );
};

export default Nav;
