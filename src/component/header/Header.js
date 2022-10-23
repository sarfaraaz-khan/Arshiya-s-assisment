import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <nav>
      <div className="logoContainer">
        <img src={Logo} />
        <span>Brand Name</span>
      </div>
      <div className="menuContainer">
        <ul>
          <li>Our Services</li>
          <li>Birdal</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact</li>
          <button className="offer">Offers!</button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
