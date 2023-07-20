import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-sweetdelights.png";

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="top-header" />
      <div className="bottom-header">
        <NavLink to="/" className="logo-container">
          <img src={logo} alt="logo sweet delights" className="img-logo" />
        </NavLink>

        <nav className="bottom-container">
          <ul>
            <li>
              <NavLink
                to="/pastryshop"
                className={
                  location === "/pastryshop" ? "navlink active" : "navlink"
                }
              >
                Pâtisserie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pastrylessons"
                className={
                  location === "/pastrylessons" ? "navlink active" : "navlink"
                }
              >
                Cours de pâtisserie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={location === "/about" ? "navlink active" : "navlink"}
              >
                À propos/notre univers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={location === "/about" ? "navlink active" : "navlink"}
              >
                Connexion
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
