// src/App.js
import React, { useState } from 'react';

function App() {

  const [target, setTarget] = useState(null);
  const [guess, setGuess] = useState(null);
  const [numberList, setNumberList] = useState([]);

  const createTargetNumber = () => {
    let randTarget = Math.floor(Math.random() * 900) + 100;
    setTarget(randTarget);
  }

  const createNumberList = () => {
    let numList = new Array(10);
    numList = numList.fill(0).map(() => Math.floor(Math.random() * 10));
    setNumberList(numList);
  }

  const checkNumber = () => {
    alert(guess);
  }

  createNumberList();

  return (
    <div>
      Countdown App
      <button onClick={createTargetNumber}>Generate Target</button>

      {target && <h2>Target: {target}</h2>}

      <input value={guess} onChange={(e) => { setGuess(e.target.value) }} type='number'></input>
      <button onClick={checkNumber}>Check Number</button>

      {guess && <h3>Guess: {guess}</h3>}

      {/* <button onClick={createNumberList}>Create List</button> */}
      {numberList &&
        <ul>{numberList.map((item, index))}
          <li key={index}>{item}</li>
        </ul>}
    </div>
  );
}

export default App;
