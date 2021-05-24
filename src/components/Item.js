import React, { useState, useEffect } from 'react';
import '../styles/item.css';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Item = (props) => {
  const { match, cards } = props;
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    console.log(match);
    console.log(cards);
  }, []);

  //+ get item
  const currentItem = cards.find((item) => item.key === match.params.id);
  console.log(currentItem);

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
        <img className="item-image" src={currentItem.src} alt="one" />
        <div className="item-details">
          <p className="item-title">{currentItem.title}</p>
          <p className="item-price">{currentItem.price}</p>
          <p className="item-description">{currentItem.description}</p>
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
