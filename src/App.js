// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import StyleQuizPage from './pages/StyleQuizPage';
import RecommendationsPage from './pages/RecommendationsPage';
import SubscriptionOptionsPage from './pages/SubscriptionOptionsPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<StyleQuizPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/subscription" element={<SubscriptionOptionsPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
