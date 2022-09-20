import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ keyword, setKeyword }) {
  return (
    <input 
      className="bg-slate-700 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600" 
      type="text" 
      placeholder="Search notes..." 
      value={keyword} 
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired
}
