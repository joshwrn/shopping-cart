import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <video muted autoPlay loop id="hero-video">
        <source src="/Videos/y.mp4" type="video/mp4" />
      </video>
      <NavLink className="hero-button-link" to="/shop">
        <button className="hero-button">SS21 Collection</button>
      </NavLink>
    </div>
  );
};

export default Home;
