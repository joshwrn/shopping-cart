import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/checkout.css';

const Checkout = ({ cart, setCart }) => {
  const [final, setFinal] = useState(0);

  //+ SUB TOTAL
  const subTotal = cart.reduce((add, item) => {
    let next = parseFloat(
      (Number(item.price) * Number(item.quantity)).toFixed(2)
    );
    return parseFloat(Number(add) + Number(next)).toFixed(2);
  }, 0);

  //+ TAX
  const tax = parseFloat((subTotal / 7.25).toFixed(2));

  //+ SET FINAL TOTAL
  const findTotal = () => {
    if (cart.length > 0) {
      setFinal(parseFloat((Number(subTotal) + Number(tax) + 15).toFixed(2)));
    }
  };

  useEffect(() => {
    findTotal();
  }, [cart]);

  return (
    <div id="checkout">
      <div id="check-gradient">
        <h1 id="check-title">SHOPPING CART</h1>
      </div>
      <img id="check-hero" src="/img/hero.jpg" alt="hero" />
      <div id="checkout-section">
        <ul id="check-list">
          {cart.map((item) => {
            return (
              <li className="check-item">
                <Link to={`/shop/item/${item.title}`} key={item.title}>
                  <img
                    className="check-item-image"
                    src={item.src}
                    alt={item.key}
                  />
                </Link>
                <div className="check-details">
                  <div className="details-right">
                    <Link to={`/shop/item/${item.title}`} key={item.title}>
                      <span className="check-name">{item.title}</span>

                      <span className="check-price">
                        ${Number(item.price).toLocaleString('en-US')}
                      </span>
                    </Link>
                  </div>
                  <p className="check-quantity">Quantity: {item.quantity}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {/*//@ SIDEBAR*/}
        <div id="checkout-sidebar">
          <div id="check-sb-header">
            <p id="check-sb-title">ORDER SUMMARY</p>
          </div>
          <div id="check-totals-div">
            <p className="check-sb-text" id="check-subtotal">
              Subtotal:{' '}
              {Number(subTotal).toLocaleString('en-US', {
                useGrouping: true,
                minimumFractionDigits: 2,
              })}
            </p>
            <p className="check-sb-text" id="check-shipping">
              Shipping: $15
            </p>
            <p className="check-sb-text" id="check-tax">
              {`Tax: 
              $${Number(tax).toLocaleString('en-US', {
                useGrouping: true,
                minimumFractionDigits: 2,
              })}`}
            </p>
            <p id="check-total">
              Total: $
              {Number(final).toLocaleString('en-US', {
                useGrouping: true,
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div id="check-sb-buttons">
            <button id="check-sb-checkout">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
