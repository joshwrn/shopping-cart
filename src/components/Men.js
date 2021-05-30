import React from 'react';
import Shop from './Shop';
import '../styles/women.css';

const Men = ({ cards, categories, setCategories }) => {
  return (
    <div id="women">
      <Shop
        cardsArray={cards}
        category={"MEN'S"}
        hero={'/img/hero3.jpg'}
        heroId={'shop-hero-man'}
        gender={'men'}
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
};

export default Men;
