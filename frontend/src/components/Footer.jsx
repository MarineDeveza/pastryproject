import React from "react";
import logo from "../assets/logo-sweetdelights.png";
import LogoFacebook from "../assets/facebook.png";
import LogoLinkedin from "../assets/linkedin.png";
import LogoTwitter from "../assets/twitter.png";
import LogoGithub from "../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-sweetdelights">
          <img src={logo} alt="logo sweet delights" className="footer-image" />
        </div>
        <div className="sweetdelights-infos">
          <p>Sweet Delights</p>
          <p>Rue de la gourmandise, 31450 FLEURS, FRANCE</p>
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
        <p className="socialNet">
          <a href="https://www.facebook.com/WildCodeSchool/">
            <img src={LogoFacebook} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/school/wild-code-school/?originalSubdomain=fr">
            <img src={LogoLinkedin} alt="linkedin" />
          </a>
          <a href="https://twitter.com/WildCodeSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img src={LogoTwitter} alt="twitter" width="25px" />
          </a>
          <a href="https://github.com/WildCodeSchool">
            <img src={LogoGithub} alt="github" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
