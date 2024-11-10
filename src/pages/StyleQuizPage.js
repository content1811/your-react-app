// src/pages/StyleQuizPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import './StyleQuizPage.css';

const questions = [
  {
    question: "What's your preferred style?",
    options: ["Casual", "Formal", "Sporty", "Trendy"]
  },
  {
    question: "What's your favorite color palette?",
    options: ["Neutral", "Bright", "Dark", "Pastel"]
  },
  {
    question: "Preferred clothing type?",
    options: ["T-shirts", "Dresses", "Jeans", "Jackets"]
  },
  {
    question: "Do you want selective items or an entire look?",
    options: ["Selective Items", "Entire Look"]
  }
];

const StyleQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    // Update answers with the selected option for the current question
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to recommendations page with answers passed as state
      navigate('/recommendations', { state: { answers } });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <ProgressBar progress={progress} />
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
        {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default StyleQuizPage;
