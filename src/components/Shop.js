import React, { useState } from 'react';
import Card from './Card';
import '../styles/shop.css';
import { Link } from 'react-router-dom';

const Shop = ({ cardsArray }) => {
  const cards = cardsArray;
  return (
    <div id="shop">
      <div id="shop-gradient"></div>
      <img id="shop-hero" src="/img/hero2.jpg" alt="hero" />
      <div id="shop-section">
        {cards.map((item) => {
          return (
            <Link to={`/shop/item/${item.key}`}>
              <Card
                title={item.title}
                src={item.src}
                price={item.price}
                description={item.description}
                key={item.key}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
