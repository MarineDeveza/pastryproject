import React from "react";
import Imagepastryshop from "../assets/imagepastryshop.jpg";
import "../AboutPastriesLessons.css";
import Imagecakedecoration from "../assets/imagecakedecoration1.png";

function About() {
  return (
    <div className="pageabout-lessons">
      <h1>A propos/notre univers</h1>
      <div className="about-lessons-container">
        <img
          src={Imagepastryshop}
          alt="imagepastryshop"
          className="img-pastryshop"
        />
        <div className="boxabout-container">
          <p>
            Sweet Delights propose des pâtisseries aussi bien traditionnelles
            que dans l’air du temps. Toutes ces créations aspirent/tendent à
            être à la fois gustatives et visuellement élégantes.
          </p>
          <p>
            Ses pâtisseries sont confectionnées avec le plus grand soin par nos
            équipes et notre chef pâtissier. Le mélange de savoir-faire et de
            passion nous permet d’obtenir un produit de qualité.
          </p>
          <p>
            Débutant, confirmé ou simple découverte, des cours de pâtisserie
            sont proposés sur réservation.
          </p>
          <img
            src={Imagecakedecoration}
            alt="imagecakedecoration"
            className="img-cakedecoration"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
