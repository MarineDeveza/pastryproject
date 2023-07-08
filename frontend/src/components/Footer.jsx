/* eslint-disable prettier/prettier */
import React from "react";
import logo from "../assets/logo-sweetdelights.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-sweetdelights">
          <img src={logo} alt="logo sweet delights" className="footer-image" />
        </div>
        <div className="sweetdelights-infos">
          <p>Sweet Delights</p>
          <p>Rue de la gourmandise, 31450 FLEURS</p>
          <p>FRANCE</p>
          <p>Tel : 33 6 01 02 03 04</p>
          <div className="footer-links">
            <p>Mentions légales</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="footerdetails">
        <p>Copyright @ 2023 - All rights reserved</p>
        <p>Developed with ♥ by MD</p>
      </div>
    </footer>
  );
}

export default Footer;
