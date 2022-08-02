import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="menu-items">
        <a>Home</a>
        <a>Contact Us</a>
        <a>About Us</a>
        <a>Settings</a>
      </nav>
    </header>
  );
};

export default Header;
