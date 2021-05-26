import React, { useState, useEffect } from 'react';
import '../styles/item.css';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ScrollToTop from './functions/ScrollToTop';

const Item = (props) => {
  const { match, cards, cart, setCart } = props;
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  //+ get item
  const currentItem = cards.find((item) => item.title === match.params.title);
  const checkItem = cart.some((item) => item.key === currentItem.key);
  const findItem = cart.findIndex((item) => item.key === currentItem.key);

  const test = () => {
    console.log(match);
  };

  const submitQuantity = (e) => {
    e.preventDefault();
    currentItem.quantity = quantity;

    if (checkItem === false) {
      setCart([...cart, currentItem]);
    } else {
      setCart((old) => [...old], {
        [cart[findItem]]: (cart[findItem].quantity = parseFloat(
          cartQuantity + currentItem.quantity
        )),
      });
    }
  };

  useEffect(() => {
    console.log(cart);
    if (checkItem === true) {
      setCartQuantity(cart[findItem].quantity);
    }
    setQuantity(1);
  }, [cart]);

  function handleChange(e) {
    const quantityInput = document.getElementById('quantity-input');
    const { value } = quantityInput;
    e.preventDefault();
    setQuantity(value);
    if (value > 99) {
      setQuantity(99);
    } else if (value < 1) {
      setQuantity(1);
    }
  }

  const increment = (e) => {
    e.preventDefault();
    if (quantity < 99) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div id="item-page">
      <ScrollToTop />
      <div id="item-inner">
        <img
          className="item-image"
          src={currentItem.src}
          alt="one"
          onClick={test}
        />
        <div className="item-details">
          <p className="item-title">{currentItem.title}</p>
          <p className="item-price">
            ${Number(currentItem.price).toLocaleString('en-US')}
          </p>
          <p className="item-description">{currentItem.description}</p>
          <form id="item-form" onSubmit={submitQuantity}>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity-name"
              onChange={handleChange}
              value={quantity}
              id="quantity-input"
            />
            <div className="arrows">
              <ArrowDropUpIcon onClick={increment} className="arrow-up" />
              <ArrowDropDownIcon onClick={decrement} className="arrow-down" />
            </div>
            <button className="submit-button" type="submit">
              <AddIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item;
