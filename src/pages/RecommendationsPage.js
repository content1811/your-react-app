// src/pages/RecommendationsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import RecommendationItem from '../components/RecommendationItem';
import './RecommendationsPage.css';

// Expanded sample data for recommendations
const sampleLooks = {
  male: {
    entireLook: [
      { id: 1, name: 'Formal Suit', description: 'Complete look for formal events', price: 150, image: '/images/formal-suit.jpg' },
      { id: 2, name: 'Casual Day Out', description: 'Relaxed casual style', price: 100, image: '/images/casual-outfit.jpg' },
      { id: 3, name: 'Beach Look', description: 'Outfit for the beach', price: 80, image: '/images/beach-look.jpg' },
      { id: 4, name: 'Winter Wear', description: 'Warm and cozy winter outfit', price: 200, image: '/images/winter-wear.jpg' }
    ],
    selectiveItems: [
      { id: 5, name: 'T-shirt', description: 'Comfortable casual t-shirt', price: 20, image: '/images/tshirt.jpg' },
      { id: 6, name: 'Jeans', description: 'Classic blue jeans', price: 40, image: '/images/jeans.jpg' },
      { id: 7, name: 'Sneakers', description: 'Stylish sneakers for everyday wear', price: 60, image: '/images/sneakers.jpg' },
      { id: 8, name: 'Jacket', description: 'Leather jacket for a bold look', price: 120, image: '/images/jacket.jpg' }
    ]
  },
  female: {
    entireLook: [
      { id: 9, name: 'Evening Dress', description: 'Elegant dress for evenings', price: 120, image: '/images/evening-dress.jpg' },
      { id: 10, name: 'Office Look', description: 'Professional office attire', price: 140, image: '/images/office-outfit.jpg' },
      { id: 11, name: 'Summer Vibes', description: 'Perfect summer outfit', price: 90, image: '/images/summer-look.jpg' },
      { id: 12, name: 'Gym Outfit', description: 'Activewear for workouts', price: 70, image: '/images/gym-outfit.jpg' }
    ],
    selectiveItems: [
      { id: 13, name: 'Blouse', description: 'Stylish blouse', price: 30, image: '/images/blouse.jpg' },
      { id: 14, name: 'Skirt', description: 'Floral skirt', price: 50, image: '/images/skirt.jpg' },
      { id: 15, name: 'Heels', description: 'Elegant heels for special occasions', price: 75, image: '/images/heels.jpg' },
      { id: 16, name: 'Handbag', description: 'Chic handbag', price: 95, image: '/images/handbag.jpg' }
    ]
  }
};

const RecommendationsPage = () => {
  const location = useLocation();
  const { answers } = location.state || {};

  const gender = answers && answers[0] ? answers[0].toLowerCase() : null;
  const preference = answers && answers[3] ? answers[3] : null;

  const showMale = !gender || gender === 'male';
  const showFemale = !gender || gender === 'female';
  const showEntireLook = !preference || preference === 'Entire Look';
  const showSelectiveItems = !preference || preference === 'Selective Items';

  return (
    <div className="recommendations-container">
      <h2>Your Personalized Recommendations</h2>

      {showMale && (
        <div className="section">
          <h3>Male - Entire Look</h3>
          <div className="recommendations-grid">
            {showEntireLook && sampleLooks.male.entireLook.map(item => (
              <RecommendationItem key={item.id} item={item} />
            ))}
          </div>
          <h3>Male - Selective Items</h3>
          <div className="recommendations-grid">
            {showSelectiveItems && sampleLooks.male.selectiveItems.map(item => (
              <RecommendationItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {showFemale && (
        <div className="section">
          <h3>Female - Entire Look</h3>
          <div className="recommendations-grid">
            {showEntireLook && sampleLooks.female.entireLook.map(item => (
              <RecommendationItem key={item.id} item={item} />
            ))}
          </div>
          <h3>Female - Selective Items</h3>
          <div className="recommendations-grid">
            {showSelectiveItems && sampleLooks.female.selectiveItems.map(item => (
              <RecommendationItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      <div className="recommendations-actions">
        <button className="action-button">Shop More</button>
        <button className="action-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default RecommendationsPage;
