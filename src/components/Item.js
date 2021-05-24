import React, { useState } from 'react';
import '../styles/item.css';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Item = () => {
  const [quantity, setQuantity] = useState(1);

  function handleChange(e) {
    const quantityInput = document.getElementById('quantity-input');
    const { value } = quantityInput;
    e.preventDefault();
    setQuantity(value);
    if (value > 99) {
      setQuantity(99);
      console.log(quantity);
    } else if (value < 1) {
      setQuantity(1);
      console.log(quantity);
    }
    console.log(quantity);
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
      <div id="item-inner">
        <img className="item-image" src="/img/clothes/one.jpeg" alt="one" />
        <div className="item-details">
          <p className="item-title">Black Gucci Dress</p>
          <p className="item-price">$1849.99</p>
          <p className="item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus
            odio id tincidunt placerat. Nunc eget rutrum elit, at rhoncus mi.
          </p>
          <form id="item-form">
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
