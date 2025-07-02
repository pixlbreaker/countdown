// src/App.js
import React, { useState } from 'react';

function App() {

  const [target, setTarget] = useState(null);
  const [guess, setGuess] = useState(null);

  const createTargetNumber = () => {
    let randTarget = Math.floor(Math.random() * 900) + 100;
    setTarget(randTarget);
  }

  const checkNumber = () => {
    console.log(guess);
  }

  return (
    <div>
      Countdown App
      <button onClick={createTargetNumber}>Generate Target</button>

      {target && <h2>Target: {target}</h2>}

      <input value={guess} onChange={(e) => { setGuess(e.target.value) }} type='number'></input>
      <button onClick={checkNumber}>Check Number</button>

      {guess && <h3>Guess: {guess}</h3>}
    </div>
  );
}

export default App;
