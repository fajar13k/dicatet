import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">Page you're looking for isn't here</h2>
      <Link to="/"><p className="text-xl font-semibold underline underline-offset-4 decoration-pink-400">Back to home</p></Link>
    </>
  )
}
