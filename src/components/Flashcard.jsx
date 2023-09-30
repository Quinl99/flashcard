import React from 'react';

const Flashcard = ({ spanish }) => {
  return (
    <div className="card">
    <div className="card-content">
      <span>{spanish}</span>
      
    </div>
  </div>
  );
};

export default Flashcard;
