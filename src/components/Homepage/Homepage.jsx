import React from 'react';
import './Homepage.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            <span className="logo">Medical Mitra</span>
          </h1>
          <h2 className="hero-tagline">
            Your AI-powered health companion for symptoms & drug interactions.
          </h2>
          <img src={process.env.PUBLIC_URL + '/heroImage.png'} alt='hero-image' className='hero-image'/>
          <p className="hero-description">
            Worried about your health concerns? Unsure about potential drug interactions? MedicalMitra is here to help. Our intelligent chatbot provides reliable information and insights to empower you on your healthcare journey.
          </p>
          <Link to="/chat">
          <button className="hero-button">Chat with Bot</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Homepage;
