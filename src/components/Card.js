import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { cardSrc } = props;

  return (
    <div className="outer-card">
      <div className="card">
        <img className="card-image" src={cardSrc} alt="one" />
        <div className="card-bottom">
          <div className="card-text">
            <p className="item-title">Black Gucci Dress</p>
            <p className="item-price">$1849.99</p>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="card-under">
        <p className="item-price">$1849.99</p>
      </div>
    </div>
  );
};

export default Card;
