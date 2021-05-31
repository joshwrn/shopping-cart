import React from 'react';
import Shop from './Shop';
import hero from '../assets/img/hero2.jpg';
import '../styles/women.css';

const Women = ({ cards, categories, setCategories }) => {
  return (
    <div id="women">
      <Shop
        cardsArray={cards}
        category="WOMEN'S"
        hero={hero}
        heroId="shop-hero-woman"
        gender="women"
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
};

export default Women;
