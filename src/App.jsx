import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="max-w-6-xl">
      <header className="flex justify-between items-center px-4 lg:px-32 py-4 bg-gradient-to-r from-pink-400 to-pink-600">
        <Link to="/">
          <h1 className="font-bold text-4xl hover:underline hover:underline-offset-8">Dicatet</h1>
        </Link>
        <Navigation />
      </header>
      <main className="px-4 lg:px-32 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
