import React, { useState, useEffect } from 'react';
import '../styles/item.css';
import ScrollToTop from './functions/ScrollToTop';
import uniqid from 'uniqid';

const Item = (props) => {
  const { match, cards, cart, setCart } = props;
  const [size, setSize] = useState('');
  //+ get item
  const findCard = cards.find((item) => item.title === match.params.title);
  const itemClone = Object.assign({}, findCard);
  const checkItem = cart.some((item) => item.title === itemClone.title);
  const findItem = cart.findIndex(
    (item) => item.title === itemClone.title && item.size === size
  );
  const findSize = cart.some(
    (item) => item.title === itemClone.title && item.size === size
  );

  const submitQuantity = (e) => {
    e.preventDefault();

    if (size !== '') {
      console.log(size);
      itemClone.quantity = 1;
      if (checkItem !== true) {
        itemClone.size = size;
        itemClone.key = uniqid();
        setCart([...cart, itemClone]); //push
      } else if (findSize !== true) {
        itemClone.size = size;
        itemClone.key = uniqid();
        setCart([...cart, itemClone]);
      } else if (cart[findItem].quantity < 5) {
        setCart((old) => [...old], {
          [cart[findItem]]: (cart[findItem].quantity = parseFloat(
            cart[findItem].quantity + 1
          )),
        });
      }
    }
  };

  useEffect(() => {
    document.getElementById('size-form').reset();
    setSize('');
  }, [cart]);

  const handleChange = () => {
    const quantityInput = document.getElementById('size-form-select');

    const { value } = quantityInput;
    setSize(value);
  };

  return (
    <div id="item-page">
      <ScrollToTop />
      <div id="item-inner">
        <div id="item-gradient"></div>
        <img className="item-image" src={itemClone.src} alt="one" />
        <div className="item-details">
          <p className="item-title">{itemClone.title}</p>
          <p className="item-price">
            ${Number(itemClone.price).toLocaleString('en-US')}
          </p>
          <p className="item-description">{itemClone.description}</p>
          <form
            id="size-form"
            onChange={handleChange}
            onSubmit={submitQuantity}
          >
            <select id="size-form-select" defaultValue={'none'}>
              <option disabled value="none">
                Size
              </option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <button className="submit-button" type="submit">
              ADD TO CART
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item;
