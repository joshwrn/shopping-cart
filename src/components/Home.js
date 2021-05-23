import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div id="home">
      <video muted autoPlay loop id="hero-video">
        <source src="/Videos/z.mp4" type="video/mp4" />
      </video>
      <NavLink className="hero-button-link" to="/shop">
        <button className="hero-button">SS21 Collection</button>
        <button className="hero-button">FW2O Collection</button>
      </NavLink>
    </div>
  );
};

export default Home;
