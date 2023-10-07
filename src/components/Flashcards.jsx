import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css'; 


const flashcards = [
    { spanish: 'Hola, ¿cómo estás?', english: 'Hello, how are you?'},
    { spanish: '¿Cuál es tu nombre?', english: 'What is your name?', color: 'lightgreen' },
    { spanish: 'Buenos dias', english: 'Good morning', color: 'orange' },
    { spanish: 'Tengo sed', english: 'I\'m thirsty' },
    { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?', color: 'lightpurple' },
    { spanish: 'Estoy aprendiendo español', english: 'I am learning Spanish', color: 'pink' },
    { spanish: 'Bien gracias', english: 'Fine thanks', color: 'blue' },
    { spanish: 'Me gusta viajar', english: 'I like to travel'},
    { spanish: '¿Cuántos años tienes?', english: 'What\'s your age?', color: 'lightyellow' },
    { spanish: '¿De qué ciudad eres?', english: 'What city are you from?', color: 'lightpink' },
    { spanish: 'Muncho gusto', english: 'Nice to meet you', color: 'lightyellow' },
    { spanish: '¿Te gusta la pizza?', english: 'Do you like pizza?' },
    { spanish: 'Por supuesto', english: 'Of course' },
    { spanish: 'Nos vemos', english: 'See you', color: 'lightrange' },
  ];
  
  

const FlashcardApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [answered, setAnswered] = useState(false);



  const handleNextCard = () => {
    //Move to the next card
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);

    //Reset answer for next card
    setUserAnswer('');
    setFeedbackVisible(false); //Hide the feedback for next card
    setAnswered(false);
  };

  const handlePrevCard = () => {
  
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );

    //Reset answer for the previous card
    setUserAnswer('');
    setFeedbackVisible(false); 
    setAnswered(false);
  };
  

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
    setFeedbackVisible(false); //Hide the feedback when user inputs
    if (e.target.value !== '') {
      setAnswered(true);
    }
  };

  const handleCheckAnswer = () => {
    //Check if the user's answer matches 
    if (userAnswer.toLowerCase() === flashcards[currentCardIndex].english.toLowerCase()) {
      setFeedbackVisible(true); //Show "Correct" feedback
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setFeedbackVisible(true);
    }
  };

  return (
    <div className="flashcard-app">
      <Flashcard 
      spanishText={flashcards[currentCardIndex].spanish}
      englishText={flashcards[currentCardIndex].english} 
      color={flashcards[currentCardIndex].color}

       />

<div className="feedback">
        {feedbackVisible &&
          (userAnswer.toLowerCase() === flashcards[currentCardIndex].english.toLowerCase() ? (
            <span className="correct-answer">Correct!</span>
          ) : (
            <span className="incorrect-answer">Incorrect.</span>
          ))}
        <div className="correct-count">Current Correct: {correctAnswers}</div>
      </div>
      
        <input className='rie'
        type="text"
        placeholder="Enter English translation"
        value={userAnswer}
        onChange={handleInputChange}
      />
       <div className="navigation-buttons">
        <button className="next-button" onClick={handlePrevCard}>
          &larr; Previous
        </button>
        <button className="next-button" onClick={handleCheckAnswer}>
          Check Answer
        </button>
        <button className="next-button" onClick={handleNextCard}>
          Next &rarr;
        </button>
      </div>

 
    </div>
  );
};

export default FlashcardApp;
