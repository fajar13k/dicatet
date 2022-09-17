import React from "react";
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul className="list-none flex gap-6 text-lg font-semibold">
        <li className="hover:underline hover:underline-offset-8">
          <Link to="/add">Add</Link>
        </li>
        <li className="hover:underline hover:underline-offset-8">
          <a href="https://github.com/fajar13k/dicatet">Github</a>
        </li>
      </ul>
    </nav>
  );
}
