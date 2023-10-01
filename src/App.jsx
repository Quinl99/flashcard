import React from 'react';
import './App.css';
import Flashcards from './components/Flashcards';


const App = () => {

  return (
    <div className="App">
      <div className='beg'>
      <h1>Welcome to The Spanish Helper!</h1>
      <h2>Let's learn random spanish lingo! </h2>
      <h2>Number of cards: 14 </h2>
      </div>
      <Flashcards />

    </div>
  )
}

export default App