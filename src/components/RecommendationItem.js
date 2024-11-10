// src/components/RecommendationItem.js
import React from 'react';
import './RecommendationItem.css';

const RecommendationItem = ({ item }) => {
  return (
    <div className="recommendation-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p className="item-price">${item.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default RecommendationItem;
