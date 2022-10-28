import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getAccessToken } from "../utils/network-data";
import ThemeSwitch  from "../components/Button/ThemeSwitch";

export default function Navigation({ logout }) {
  const accessToken = getAccessToken();

  return (
    <nav>
      <ul className="list-none flex gap-6 text-lg font-semibold items-center">
        {accessToken === null ? (
          <>
            <li className="hover:underline hover:opacity-90 flex items-center">
              <ThemeSwitch />
            </li>
            <li className="text-neutral-50 hover:underline hover:underline-offset-8">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-neutral-50 hover:underline hover:underline-offset-8">
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li className="hover:underline hover:opacity-90 flex items-center">
              <ThemeSwitch />
            </li>
            <li className="text-neutral-50 hover:underline hover:underline-offset-8">
              <Link to="/add">Add</Link>
            </li>
            <li className="text-neutral-50 hover:underline hover:underline-offset-8">
              <a href="https://github.com/fajar13k/dicatet">Github</a>
            </li>
            <li className="text-neutral-50 hover:underline hover:underline-offset-8">
              <button
                className="bg-white px-3 py-1 rounded-md text-pink-400 hover:opacity-90"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
};
