// src/App.jsx

import ProfileCard from './ProfileCard'; // 1. Import the component
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* 2. Use the component like an HTML tag */}
      {/* Each attribute (name, title, etc.) is a "prop" being passed down */}
      <ProfileCard
        name="Naitik Tiwari"
        title="Spider Man ❌ web developer ✅"
        imageUrl="https://i.pravatar.cc/150?img=1"
        bio="Hello I am Naitik Tiwari"
      />

      <ProfileCard
        name="Riya Gupta"
        title="Computer Scientist"
        imageUrl="https://i.pravatar.cc/150?img=2"
        bio="Loves coding and coffee."
      />
      <ProfileCard
        name="Utakarsh Singh Thakur"
        title="Computer Scientist"
        imageUrl="https://i.pravatar.cc/150?img=2"
        bio="the cool guy"
      />
    </div>
  );
}

export default App;