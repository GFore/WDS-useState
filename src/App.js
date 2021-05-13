import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4);

  return (
    <div id="root">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
