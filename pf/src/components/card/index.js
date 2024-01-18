
import React from 'react';
import './styles.css';

const Card = ({ color, children }) => {
  const cardStyle = {
    backgroundColor: color || '#3a3a3a',
    // Add other styles here
  };

  return (
    <div className="card" style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
