// src/App.js
import React, { useState } from 'react';

function App() {

  const [target, setTarget] = useState(null);


  const createTargetNumber = () => {
    let randTarget = Math.floor(Math.random() * 900) + 100;
    setTarget(randTarget);
  }

  return (
    <div>
      Countdown App
      <button onClick={createTargetNumber}>Generate Target</button>

      {target && <h2>Target: {target}</h2>}
    </div>
  );
}

export default App;
