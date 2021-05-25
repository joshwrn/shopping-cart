import React, { useState, useEffect } from 'react';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import '../styles/cart.css';

const Cart = (props) => {
  const { click, cart, setCart } = props;
  const [total, setTotal] = useState(0);

  const totalPrice = cart.reduce((add, item) => {
    let next = parseFloat(
      (Number(item.price) * Number(item.quantity)).toFixed(2)
    );
    return parseFloat(Number(add) + Number(next)).toFixed(2);
  }, 0);

  useEffect(() => {
    setTotal(totalPrice);
    console.log(total);
  }, [cart]);

  return (
    <div>
      <div id="cart-outer">
        <div id="cart">
          <div id="cart-header">
            <CloseSharpIcon
              id="cart-close"
              style={{ color: 'black' }}
              onClick={click}
            />
            <p id="total">Total: ${total}</p>
          </div>
          <ul id="cart-list">
            {cart.map((item) => {
              return (
                <li key={item.key} className="cart-item">
                  <img
                    className="cart-item-image"
                    src={item.src}
                    alt={item.key}
                  />
                  <div className="item-details">
                    <span className="item-name">{item.title}</span>
                    <div>
                      <span className="item-text">{`$${item.price}`}</span>
                      <span className="item-text">
                        Quantity: {item.quantity}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
