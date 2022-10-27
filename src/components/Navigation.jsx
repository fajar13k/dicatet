import React from "react";
import { Link } from 'react-router-dom';
import { getAccessToken } from "../utils/network-data";

export default function Navigation() {
  const accessToken = getAccessToken();
  
  return (
    <nav>
      <ul className="list-none flex gap-6 text-lg font-semibold">
        {accessToken !== null ? (
          <>
            <li className="hover:underline hover:underline-offset-8">
              <Link to="/add">Add</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <a href="https://github.com/fajar13k/dicatet">Github</a>
            </li>
          </>
        ) : (
          <>
            <li className="hover:underline hover:underline-offset-8">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link to="/login">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
