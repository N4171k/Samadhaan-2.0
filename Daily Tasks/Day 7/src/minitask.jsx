import React, { useState } from 'react';

function MiniTask() {

  const [count, setCount] = useState(0);

  const [text, setText] = useState('');

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Mini Task</h1>

 
      <div>
        <h2>Counter</h2>
        <p>Current Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <hr />

      <div>
        <h2>Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <p><strong>Preview:</strong> {text}</p>
      </div>
    </div>
  );
}

export default MiniTask;