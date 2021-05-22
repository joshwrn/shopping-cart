import React from 'react';
import Cart from '../components/Cart';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-center">
        {/*//+ logo */}
        <h1 className="logo">BRAND</h1>
        {/*//+ links */}
        <ul className="nav-links">
          <Link to="/">
            <li className="nav-page">Home</li>
          </Link>
          <Link to="/shop">
            <li className="nav-page">Shop</li>
          </Link>
          <Link to="/shop">
            <li className="nav-page">About</li>
          </Link>
        </ul>
      </div>
      {/*//+ cart */}
      <Cart />
    </div>
  );
};

export default Nav;
