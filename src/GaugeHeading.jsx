import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GaugeHeading = ({ text, rating }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('your-api-endpoint');
        setFeedback(response.data.feedback);
      } catch (error) {
        console.error(error);
        setFeedback('Error fetching feedback');
      }
    };

    if (showFeedback) {
      fetchFeedback();
    }
  }, [showFeedback]);

  const handleMouseEnter = () => {
    setShowFeedback(true);
  };

  const handleMouseLeave = () => {
    setShowFeedback(false);
  };

  return (
    <div className="gauge-heading-container">
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </h1>
      {!showFeedback && <p className="rating">{rating}%</p>}
      {showFeedback && (
        <div className="feedback-container">
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default GaugeHeading;
