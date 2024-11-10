// src/components/BenefitsSection.js
import React from 'react';
import './BenefitsSection.css';

const benefits = [
  { title: "Personalized Recommendations", description: "Tailored looks just for you for all seasons and festivities ." },
  { title: "Expert AI and Premium Stylists", description: "Get curated fashion from top stylists along with your personal AI stylist." },
  { title: "Convenient Shopping", description: "Shop with ease and comfort and get your outfit quick and conveniently." },
];

const BenefitsSection = () => {
  return (
    <section className="benefits">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </section>
  );
};

export default BenefitsSection;
