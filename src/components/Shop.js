import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/shop.css';
import { Link } from 'react-router-dom';
import FilterBox from './FilterBox';

const Shop = ({ cardsArray }) => {
  const cards = cardsArray;
  const [filters, setFilters] = useState([{ color: 'all', type: 'all' }]);
  const [currentItems, setItems] = useState(cards);

  return (
    <div id="shop">
      <div id="shop-gradient">
        <h1 id="shop-title">WOMEN'S</h1>
      </div>
      <img id="shop-hero" src="/img/hero2.jpg" alt="hero" />
      <FilterBox
        filters={filters}
        setFilters={setFilters}
        currentItems={currentItems}
        setItems={setItems}
        cards={cards}
      />
      <div id="shop-section">
        {currentItems.map((item) => {
          return (
            <Link to={`/shop/item/${item.key}`} key={item.key}>
              <Card
                title={item.title}
                src={item.src}
                price={`$${Number(item.price).toLocaleString('en-US')}`}
                description={item.description}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
