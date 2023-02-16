import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <li className="menu">
          <Link to="/">Home</Link>
        </li>
        <li className="menu">
          <Link to="/about">About</Link>
        </li>
        <li className="menu">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
