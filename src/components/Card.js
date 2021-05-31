import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { src, title, price, description, brand } = props;

  return (
    <div className="outer-card">
      <div className="card">
        <img className="card-image" src={src} alt="one" />
        <div className="card-bottom">
          <div className="card-text">
            <p className="item-title">{title}</p>
            <p className="item-brand">{brand}</p>
            <p className="item-description">{description}</p>
          </div>
        </div>
      </div>
      <div className="card-under">
        <p className="item-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
