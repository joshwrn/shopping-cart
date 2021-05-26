import React, { useState, useEffect } from 'react';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import '../styles/cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { click, cart, setCart } = props;

  const totalPrice = cart.reduce((add, item) => {
    let next = parseFloat(
      (Number(item.price) * Number(item.quantity)).toFixed(2)
    );
    return parseFloat(Number(add) + Number(next)).toFixed(2);
  }, 0);

  return (
    <div>
      <div id="cart-outer">
        <div id="cart" onMouseLeave={click}>
          <div id="cart-header">
            <CloseSharpIcon
              id="cart-close"
              style={{ color: 'black' }}
              onClick={click}
            />
            <p id="total">
              Total: ${Number(totalPrice).toLocaleString('en-US')}
            </p>
          </div>{' '}
          <div id="cart-scroll">
            <ul id="cart-list">
              {cart.map((item) => {
                return (
                  <Link to={`/shop/item/${item.title}`} key={item.title}>
                    <li className="cart-item">
                      <img
                        className="cart-item-image"
                        src={item.src}
                        alt={item.key}
                      />
                      <div className="item-details">
                        <span className="item-name">{item.title}</span>
                        <div>
                          <span className="item-text">
                            ${Number(item.price).toLocaleString('en-US')}
                          </span>
                          <span className="item-text">
                            Quantity: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div id="cart-bottom">
            <button id="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
