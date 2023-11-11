/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-sweetdelights.png";
import "../Burger.css";

function Burger() {
  const [sidebar, setSidebar] = useState(false);
  const navContainerRef = useRef(null);
  const hamburgerRef = useRef(null);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  function closeSidebarAndNavigate() {
    setSidebar(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebar(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <div className="button-container">
            <button
              ref={hamburgerRef}
              className={sidebar ? "hamburger open" : "hamburger"}
              type="button"
              aria-label="Toggle nav"
              aria-expanded={sidebar ? "true" : "false"}
              onClick={showSidebar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            ref={navContainerRef}
            className={!sidebar ? "nav-container" : "nav-container open"}
          >
            <li>
              <Link
                to="/"
                className="nav-icon"
                aria-label="visit homepage"
                aria-current="page"
                onClick={closeSidebarAndNavigate}
              >
                <img className="logo-navbar" src={logo} alt="logo" />
              </Link>
            </li>

            <li className="lineHover">
              <Link to="/pastryshop" onClick={closeSidebarAndNavigate}>
                Pâtisserie
              </Link>
            </li>
            <li className="lineHover">
              <Link to="/pastrylessons" onClick={closeSidebarAndNavigate}>
                Cours de pâtisserie
              </Link>
            </li>
            <li className="lineHover">
              <Link to="/about" onClick={closeSidebarAndNavigate}>
                A propos / notre univers
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeSidebarAndNavigate}>
                Se connecter
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Burger;
