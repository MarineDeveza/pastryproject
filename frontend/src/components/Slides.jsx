/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from "react";
import Imagepastryslideone from "../assets/imagepastryslideone.jpg";
import Imagepastryslidetwo from "../assets/imagepastryslidetwo.jpg";
import Imagepastryslidethree from "../assets/imagepastryslidethree.jpg";
import Imagepastryslidefour from "../assets/imagepastryslidefour.jpg";

function Slides() {
  const slidePictures = [
    {
      picture: (
        <figure>
          <img
            className="imgslide"
            src={Imagepastryslideone}
            alt=""
            // width="1020"
            // height="500"
          />
          <figcaption>Pâtisseries</figcaption>
        </figure>
      ),
    },
    {
      picture: (
        <figure>
          <img
            className="imgslide"
            src={Imagepastryslidetwo}
            alt=""
            // width="1020"
            // height="500"
          />
          <figcaption>Cours de pâtisseries</figcaption>
        </figure>
      ),
    },
    {
      picture: (
        <figure>
          <img
            className="imgslide"
            src={Imagepastryslidethree}
            alt=""
            // width="1020"
            // height="500"
          />
          <figcaption>
            Notre univers<em>("La fraise sur le gâteau")</em>
          </figcaption>
        </figure>
      ),
    },
    {
      picture: (
        <figure>
          <img
            className="imgslide"
            src={Imagepastryslidefour}
            alt=""
            // width="640"
            // height="310"
          />
          <figcaption>Nouveautés et sélection</figcaption>
        </figure>
      ),
    },
  ];

  const delay = 3000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slidePictures.map((data, index) => (
          <div className="slide" key={index}>
            {" "}
            {data.picture}{" "}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {slidePictures.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slides;
