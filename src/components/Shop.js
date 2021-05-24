import React from 'react';
import Card from './Card';
import '../styles/shop.css';

const Shop = () => {
  return (
    <div id="shop">
      <div id="shop-gradient"></div>
      <img id="shop-hero" src="/img/hero2.jpg" alt="hero" />
      <div id="shop-section">
        <Card cardSrc="/img/clothes/one.jpeg" />
        <Card cardSrc="/img/clothes/two.jpeg" />
        <Card cardSrc="/img/clothes/three.jpeg" />
        <Card cardSrc="/img/clothes/four.jpeg" />
        <Card cardSrc="/img/clothes/five.jpeg" />
      </div>
    </div>
  );
};

export default Shop;
