// Write your JS code here
import { Link } from "react-router-dom";

import React from "react";

import "./index.css";

function Header() {
  return (
    <div className="mainContainer">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <div className="nav-items-container">
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
