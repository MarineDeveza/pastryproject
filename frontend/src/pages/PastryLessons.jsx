import React from "react";
import Pastryleader from "../assets/zpastryleader.jpg";
import "../AboutPastriesLessons.css";
import Imagecakedecorationbis from "../assets/imagecakedecoration2.png";

function PastryLessons() {
  return (
    <div className="pageabout-lessons">
      <h1>Cours de pâtisserie</h1>
      <h2>Recettes de pâtisserie à suivre, organisées par Sweet.</h2>
      <div className="about-lessons-container">
        <img
          src={Pastryleader}
          alt="pastry-leader"
          className="img-pastryleader"
        />
        <div className="boxabout-container">
          <p>
            Que ce soient des gâteaux, biscuits, macarons ou cakes, Sweet vous
            apprend des desserts délicieux et faciles ! <br />
            Qui ne craquerait pas pour ces merveilles de la pâtisserie...
          </p>
          <p>Pensez à réserver votre place pour ce moment de convivialité !</p>
          <img
            src={Imagecakedecorationbis}
            alt="imagecakedecorationbis"
            className="img-cakedecorationbis"
          />
        </div>
      </div>
    </div>
  );
}

export default PastryLessons;
