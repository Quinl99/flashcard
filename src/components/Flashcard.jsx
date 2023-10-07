import React, { useState, useEffect } from 'react';
import './Flashcard.css'; 


const Flashcard = ({ spanishText, englishText, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    useEffect(() => {
      setIsFlipped(false);  
    }, [spanishText, englishText]);

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
