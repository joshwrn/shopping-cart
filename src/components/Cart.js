import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

const Cart = (props) => {
  const { click } = props;
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
            <p id="total">Total: $2,229.97</p>
          </div>
          <ul id="cart-list">
            <li className="cart-item">
              <img className="item-image" src="/img/one.jpeg" alt="item1" />
              <div className="item-details">
                <span className="item-name">Black Gucci Dress</span>
                <div>
                  <span className="item-text">$1849.99</span>
                  <span className="item-text">Quantity: 01</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
