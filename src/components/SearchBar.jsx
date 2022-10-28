import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ keyword, setKeyword }) {
  return (
    <input 
      className="bg-neutral-200 dark:bg-slate-700 text-slate-700 dark:text-neutral-50 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-300" 
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
