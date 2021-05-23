import React, { useState } from 'react';
import CartIcon from './CartIcon';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = (e) => {
    e.preventDefault();
    const cart = document.getElementById('cart-outer');
    if (cartOpen === false) {
      setCartOpen(true);
      cart.style.setProperty('visibility', 'visible');
    } else if (cartOpen === true) {
      setCartOpen(false);
      cart.style.setProperty('visibility', 'hidden');
    }
  };

  return (
    <div className="nav">
      <div id="nav-left">
        <div id="nav-location">
          <LanguageIcon className="nav-lang" style={{ fontSize: '0.8rem' }} />
          <p className="nav-text">United States</p>
        </div>
        <p className="nav-text">English</p>
      </div>
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
      <div id="nav-right">
        {/*//+ cart */}
        <CartIcon click={openCart} />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Nav;
