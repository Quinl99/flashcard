import React, { useState } from 'react';
import './Flashcard.css'; 


const Flashcard = ({ spanishText, englishText, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    };
  
    const content = isFlipped ? englishText : spanishText;
    const cardStyle = {
        backgroundColor: color,
        };
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} style={cardStyle} onClick={handleClick}>
      <div className="flashcard-content">
        <span>{content}</span>
      </div>
    </div>
  );
};





export default Flashcard;
