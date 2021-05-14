import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(currentCount => currentCount - 1);
  }

  function incrementCount() {
    setCount(currentCount => currentCount + 1);
  }

  return (
    <div id="root">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
