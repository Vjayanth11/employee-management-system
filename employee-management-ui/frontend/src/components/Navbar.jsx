import { Link } from "react-router-dom";
import "./Navbar.css"; // optional styling

import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">EMS</h3>
      <div className="links">
        <a href="/">Home</a>
        <a href="/employee">Employee</a>
        <a href="/admin">Admin</a>
      </div>
    </nav>
  );
}

export default Navbar;

