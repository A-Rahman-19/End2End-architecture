import '../Styles/header.css';
import React, { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
   <div className="nav">
      <img
        src={require("../assets/End2Endlogo.png")}
        alt="Company logo"
        className="header-logo"
      />

      {/* Hamburger toggle button */}
      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>

      {/* Nav menu */}
      <ul className={`nav-as ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="/" className="as skills-a">
            Home
          </a>
        </li>
        <li>
          <a href="/architecture" className="as contact-a">
            Architecture
          </a>
        </li>
        <li>
          <a href="/interior-design" className="as contact-a">
            Interior Design
          </a>
        </li>
        <li>
          <a href="/portfolio" className="as contact-a">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
