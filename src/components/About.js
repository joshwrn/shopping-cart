import React from 'react';
import '../styles/about.css';
import hero from '../assets/img/about.jpg';

const About = () => {
  return (
    <div id="about">
      <div id="about-gradient">
        <div id="about-details">
          <h1 id="about-title">ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
            lacus, molestie elementum sollicitudin non, efficitur sit amet
            ipsum. Fusce commodo hendrerit odio, sodales rutrum sem bibendum
            sed. Duis dapibus nulla et enim convallis maximus.
          </p>
        </div>
      </div>
      <img id="about-hero" src={hero} alt="hero" />
    </div>
  );
};

export default About;
