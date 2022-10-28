import React from "react";
import PropTypes from "prop-types";
import { Text } from "../contexts/LanguageContext/LanguageContextWrapper";

export default function SearchBar({ keyword, setKeyword }) {
  return (
    <div>
      <label htmlFor="search" className="block mb-2 text-md font-semibold text-slate-700 dark:text-neutral-50"><Text tid="search" /></label>
      <input
        className="bg-neutral-200 dark:bg-slate-700 text-slate-700 dark:text-neutral-50 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-300"
        id="search"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};
