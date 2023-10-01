import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './Flashcard.css'; 


const flashcards = [
    { spanish: 'Hola, ¿cómo estás?', english: 'Hello, how are you?'},
    { spanish: '¿Cuál es tu nombre?', english: 'What is your name?', color: 'lightgreen' },
    { spanish: 'Tengo hambre', english: 'I am hungry', color: 'orange' },
    { spanish: 'Vamos al cine', english: 'Let\'s go to the movies' },
    { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?', color: 'lightpurple' },
    { spanish: 'Estoy aprendiendo español', english: 'I am learning Spanish', color: 'pink' },
    { spanish: 'Tengo una reunión', english: 'I have a meeting', color: 'blue' },
    { spanish: 'Me gusta viajar', english: 'I like to travel'},
    { spanish: '¿Cuántos años tienes?', english: 'What\'s your age?', color: 'lightyellow' },
    { spanish: '¿De qué ciudad eres?', english: 'What city are you from?', color: 'lightpink' },
    { spanish: '¿Te gusta salir con amigos?', english: 'Do you like to go out with friends?', color: 'lightyellow' },
    { spanish: '¿Te gusta la pizza?', english: 'Do you like pizza?' },
    { spanish: 'Quiero ser rico', english: 'I want to be wealthy' },
    { spanish: 'Voy a triunfar', english: 'I will rise', color: 'lightrange' },
  ];
  
  

const FlashcardApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="flashcard-app">
      <Flashcard 
      spanishText={flashcards[currentCardIndex].spanish}
        englishText={flashcards[currentCardIndex].english} 
      color={flashcards[currentCardIndex].color}
       />
    <button className="next-button" onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default FlashcardApp;
