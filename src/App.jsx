import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="max-w-6-xl">
      <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
        <h1 className="font-bold text-4xl">Dicatet</h1>
        <Navigation />
      </header>
      <main className="px-4 lg:px-32 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
