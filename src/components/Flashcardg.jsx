import React from "react";
import Flashcard from './Flashcard'

const flashcards = [
    'Hola, ¿cómo estás?',
    '¿Cuál es tu nombre?',
    'Tengo hambre',
    'Vamos al cine',
    'Estoy aprendiendo español',
    '¿Dónde está el baño?',
    'Quiero una taza de café',
    'Hace calor hoy',
    'Tengo una reunión',
    'Me gusta viajar',
  ];

const FlashcardGame = () => {
    return (
        <div className="flashcard-game">
        {flashcards.map((spanishSentence, index) => (
          <Flashcard key={index} spanish={spanishSentence} />
        ))}
      </div>
        )
}

export default FlashcardGame;