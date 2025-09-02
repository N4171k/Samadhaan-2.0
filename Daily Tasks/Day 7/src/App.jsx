import React from 'react';
import MiniTask from './minitask.jsx'; // Import the component
import './App.css'; // For basic styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiniTask /> {/* Render your component here */}
      </header>
    </div>
  );
}

export default App;