import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "PINKVENOM";
function App() {
  return (
    <div>
      <h1>Let's play guess the word!!</h1>
      {
        <><WordCard value={word} /><WordCard value="BORNPINK" /><WordCard value="BORNPINK" /></>
      }
    </div>
  );
}

export default App;
