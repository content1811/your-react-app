// src/pages/ShopPage.js
import React from 'react';
import './ShopPage.css';

const items = [
  {
    id: 1,
    name: "Casual Look",
    price: "₹1500",
    image: "/images/casual-outfit.jpg"
  },
  {
    id: 2,
    name: "Formal Suit",
    price: "₹3500",
    image: "/images/formal-suit.jpg"
  },
  {
    id: 3,
    name: "Sporty Outfit",
    price: "₹1200",
    image: "/images/gym-outfit.jpg"
  },
  {
    id: 4,
    name: "Trendy Jacket",
    price: "₹2500",
    image: "/images/jacket.jpg"
  },
];

const ShopPage = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-heading">Shop Our Collection</h2>
      <div className="shop-items">
        {items.map((item) => (
          <div key={item.id} className="shop-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-price">{item.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
