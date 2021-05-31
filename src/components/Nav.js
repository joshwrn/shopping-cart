import React, { useState, useEffect } from 'react';
import LanguageIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import '../styles/nav.css';

const Nav = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, setCart } = props;

  useEffect(() => {
    if (cart.length > 0) {
      const cartIcon = document.getElementById('cart-icon');
      cartIcon.style.setProperty('animation', 'bounce 0.8s');
      setTimeout(() => {
        cartIcon.style.setProperty('animation', '');
      }, 800);
    }
  }, [cart]);

  //+ SCROLL FUNCTION

  window.onscroll = () => {
    const navBg = document.getElementById('nav');
    if (
      document.body.scrollTop >= 20 ||
      document.documentElement.scrollTop >= 20
    ) {
      navBg.style.setProperty('background-color', 'black');
    } else if (cartOpen === false) {
      navBg.style.setProperty('background-color', '');
    }
  };

  //+ CART FUNCTION
  const openCart = () => {
    const cartElement = document.getElementById('cart-outer');
    const cartInner = document.getElementById('cart');
    const navBg = document.getElementById('nav');
    if (cartOpen === false) {
      //@ OPEN CART
      setCartOpen(true);
      cartInner.style.setProperty('height', '25em');
      cartElement.style.setProperty('visibility', 'visible');
      navBg.style.setProperty('background-color', 'black');
    } else if (cartOpen === true) {
      //@ CLOSE CART
      setCartOpen(false);
      cartInner.style.setProperty('height', '0em');
      setTimeout(() => {
        cartElement.style.setProperty('visibility', 'hidden');
      }, 600);
      if (
        !document.body.scrollTop >= 20 ||
        !document.documentElement.scrollTop >= 20
      ) {
        navBg.style.setProperty('background-color', '');
      }
    }
  };

  useEffect(() => {
    if (
      cart.length > 0 &&
      cartOpen === false &&
      window.location.pathname !== '/checkout'
    ) {
      openCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div id="nav">
      <div id="nav-left">
        <div id="nav-location">
          <LanguageIcon className="nav-lang" style={{ fontSize: '0.8rem' }} />
          <a
            href="https://github.com/joshwrn"
            target="_blank"
            className="nav-text"
            rel="noreferrer"
          >
            Josh Warren
          </a>
        </div>
        <p className="nav-text">California</p>
      </div>
      <div id="nav-center">
        {/*//+ logo */}
        <h1 id="logo">BRAND</h1>
        {/*//+ links */}
        <ul className="nav-links">
          <NavLink exact to="/shopping-cart">
            <li className="nav-page">Home</li>
          </NavLink>
          <NavLink to="/women">
            <li className="nav-page">Women</li>
          </NavLink>
          <NavLink to="/men">
            <li className="nav-page">Men</li>
          </NavLink>
          <NavLink to="/about">
            <li className="nav-page">About</li>
          </NavLink>
        </ul>
      </div>
      <div id="nav-right">
        {/*//+ cart */}
        <CartIcon cart={cart} setCart={setCart} click={openCart} />
        <Link to="/search">
          <SearchIcon id="search-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
