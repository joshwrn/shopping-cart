import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/checkout.css';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import OrderSuccess from './OrderSuccess';
import ScrollToTop from './functions/ScrollToTop';
import hero from '../assets/img/hero.jpg';

const Checkout = ({ cart, setCart }) => {
  const [final, setFinal] = useState(0);
  const [orderStatus, setOrderStatus] = useState(false);

  //+ SUB TOTAL
  const subTotal = cart.reduce((add, item) => {
    const next = parseFloat(
      (Number(item.price) * Number(item.quantity)).toFixed(2)
    );
    return parseFloat(Number(add) + Number(next)).toFixed(2);
  }, 0);

  //+ TAX
  const tax = parseFloat((subTotal / 7.25).toFixed(2));

  //+ SET FINAL TOTAL

  useEffect(() => {
    if (cart.length > 0) {
      setFinal(parseFloat((Number(subTotal) + Number(tax) + 15).toFixed(2)));
    } else {
      setFinal(0);
    }
  }, [cart, tax, subTotal]);

  //+ UPDATE QUANTITY

  const handleQuantity = (e) => {
    e.preventDefault();
    const itemKey = e.target.getAttribute('data-key');
    const findItem = cart.findIndex((item) => item.key === itemKey);
    setCart((old) => [...old], {
      [cart[findItem]]: (cart[findItem].quantity = e.target.value),
    });
  };

  //+ HANDLE DELETE

  const handleDelete = (e) => {
    e.preventDefault();
    const itemKey = e.target.getAttribute('data-key');
    const findItem = cart.findIndex((item) => item.key === itemKey);
    setCart((old) => [...old], cart.splice(findItem, 1));
  };

  //+ HANDLE ORDER
  const submitOrder = (e) => {
    e.preventDefault();
    if (cart.length > 0) {
      setOrderStatus(true);
      setCart([]);
    }
  };

  return (
    <div id="checkout">
      <ScrollToTop />
      <div id="check-gradient">
        <h1 id="check-title">SHOPPING CART</h1>
      </div>
      <img id="check-hero" src={hero} alt="hero" />
      <div id="checkout-section">
        <div id="list-container">
          {orderStatus ? (
            <OrderSuccess />
          ) : (
            <ul id="check-list">
              {cart.map((item) => {
                return (
                  <li className="check-item" key={item.key}>
                    <Link to={`/shop/item/${item.title}`}>
                      <img
                        className="check-item-image"
                        src={item.src}
                        alt={item.key}
                      />
                    </Link>
                    <div className="check-details">
                      <div className="details-left">
                        <Link to={`/shop/item/${item.title}`} key={item.title}>
                          <span className="check-brand">{item.brand}</span>
                          <span className="check-name">{item.title}</span>

                          <span className="check-price">
                            ${Number(item.price).toLocaleString('en-US')}
                          </span>
                        </Link>

                        <p className="check-size">Size: {item.size}</p>

                        {/*//> SET QUANTITY */}
                      </div>
                      <div className="check-quantity">
                        Quantity:
                        <form onChange={handleQuantity}>
                          <select
                            data-key={item.key}
                            className="quantity-form"
                            defaultValue={item.quantity}
                          >
                            <option disabled value={item.quantity}>
                              {item.quantity}
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </form>
                        <CloseSharpIcon
                          onClick={handleDelete}
                          data-key={item.key}
                          className="delete-item"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
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
            <button id="check-sb-checkout" onClick={submitOrder}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
