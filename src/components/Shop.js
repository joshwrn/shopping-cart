import React from 'react';
import Card from './Card';
import '../styles/shop.css';

const Shop = () => {
  return (
    <div id="shop">
      <div id="shop-gradient"></div>
      <img id="shop-hero" src="/img/hero2.jpg" alt="hero" />
      <div id="shop-section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Shop;
