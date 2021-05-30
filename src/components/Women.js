import React from 'react';
import Shop from './Shop';
import '../styles/women.css';

const Women = ({ cards, categories, setCategories }) => {
  return (
    <div id="women">
      <Shop
        cardsArray={cards}
        category={"WOMEN'S"}
        hero={'/img/hero2.jpg'}
        gender={'women'}
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
};

export default Women;
