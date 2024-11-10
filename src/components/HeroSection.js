// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <section className="hero">
      <video autoPlay loop muted className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h2>Your Personal Stylist, Anytime, Anywhere</h2>
        <p>Discover styles tailored to your taste and lifestyle. Get started with a simple quiz and receive curated looks just for you.</p>
        <CTAButton text="Start Style Quiz" onClick={handleStartQuiz} />
      </div>
    </section>
  );
};

export default HeroSection;
