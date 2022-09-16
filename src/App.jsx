import React from 'react';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="max-w-6-xl">
      <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
        <h1 className="font-bold text-3xl">Dicatet</h1>
        <Navigation />
      </header>
    </div>
  )
}

export default App;
