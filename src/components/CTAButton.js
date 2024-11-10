// src/components/CTAButton.js
import React from 'react';
import './CTAButton.css';

const CTAButton = ({ text, onClick }) => {
  return <button className="cta-btn" onClick={onClick}>{text}</button>;
};

export default CTAButton;
