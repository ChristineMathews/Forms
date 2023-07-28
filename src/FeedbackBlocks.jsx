import React, { useState, useEffect } from 'react';
import feedbacksData from './feedbacks.json';
import './FeedbackComponent.css'; // Import the CSS file for styling

const FeedbackBlocks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating the API call with a setTimeout (replace this with your actual API call)
    setTimeout(() => {
      setFeedbacks(feedbacksData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">Feedbacks</h2>
      <div className="feedback-boxes-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-box">
              <h3 className="feedback-name">{feedback.name}</h3>
              <p className="feedback-message">{feedback.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackBlocks;
