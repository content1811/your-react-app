// src/pages/SubscriptionOptionsPage.js
import React from 'react';
import './SubscriptionOptionsPage.css';

const SubscriptionOptionsPage = () => {
  return (
    <div className="subscription-container">
      <h2 className="subscription-heading">Choose Your Plan</h2>
      <div className="subscription-cards">
        <div className="card">
          <h3>Style Pal</h3>
          <p className="price">₹499/month</p>
          <ul className="benefits-list">
            <li>AI Stylist Features</li>
            <li>2 Free Shipments & Returns per Month</li>
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="card premium">
          <h3>Premium Stylist</h3>
          <p className="price">₹999/month</p>
          <ul className="benefits-list">
            <li>Personal Stylist Picks & Chats</li>
            <li>AI Stylist Features</li>
            <li>Up to 5 Free Shipments & Returns</li>
            <li>Delivery Within a Day</li>
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="payment-options">
        <h3>Payment Options</h3>
        <div className="payment-methods">
          <div className="payment-option">PayPal Autopay</div>
          <div className="payment-option">Credit Card Subscription</div>
          <div className="payment-option">Debit Card</div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOptionsPage;
