import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="navbar">
      <ul>
        <Link to="/home" className="navbar-link">
          <li>Home</li>
        </Link>
        <Link to="/contact" className="navbar-link">
          <li>Contact</li>
        </Link>
        <Link to="/about" className="navbar-link">
          <li>About</li>
        </Link>
      </ul>
      <Link to="/admin" className="navbar-link right">
        <li>Login</li>
      </Link>
    </div>
  );
};

export default Nav;
