import React, { useState } from 'react';
import CartIcon from './CartIcon';
import LanguageIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = (e) => {
    e.preventDefault();
    const cart = document.getElementById('cart-outer');
    const cartInner = document.getElementById('cart');
    const navBg = document.getElementById('nav');
    if (cartOpen === false) {
      //@ OPEN CART
      setCartOpen(true);
      cartInner.style.setProperty('height', '25em');
      cart.style.setProperty('visibility', 'visible');
      navBg.style.setProperty('background-color', 'black');
    } else if (cartOpen === true) {
      //@ CLOSE CART
      setCartOpen(false);
      cartInner.style.setProperty('height', '0em');
      setTimeout(function () {
        cart.style.setProperty('visibility', 'hidden');
      }, 1000);
      navBg.style.setProperty('background-color', '');
    }
  };

  return (
    <div id="nav">
      <div id="nav-left">
        <div id="nav-location">
          <LanguageIcon className="nav-lang" style={{ fontSize: '0.8rem' }} />
          <a
            href="https://twitter.com/joshwrn"
            target="_blank"
            className="nav-text"
          >
            Josh Warren
          </a>
        </div>
        <p className="nav-text">California</p>
      </div>
      <div id="nav-center">
        {/*//+ logo */}
        <h1 className="logo">BRAND</h1>
        {/*//+ links */}
        <ul className="nav-links">
          <NavLink exact to="/">
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
        <SearchIcon id="search-icon" />
      </div>
    </div>
  );
};

export default Nav;
