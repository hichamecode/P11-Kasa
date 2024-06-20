import "./SlideShow.scss";
import leftArrow from "./../assets/left-arrow.svg";
import rightArrow from "./../assets/right-arrow.svg";
import { useState } from "react";
import React from "react";

const SlideShow = ({ cover, pictures }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (pictures.length === 1) {
    return (
      <div className="slideshow-container">
        <div className="slideshow-wrapper">
          <img
            src={pictures[currentIndex]}
            alt="Logement"
            className="slideshow-image"
          />
        </div>
      </div>
    );
  }  
    return (
      <div className="slideshow-container">
        <div className="slideshow-wrapper">
          <img
            src={pictures[currentIndex]}
            alt="Logement"
            className="slideshow-image"
          />
        </div>
        <img
          className="arrow left-arrow"
          src={leftArrow}
          alt="left-arrow"
          onClick={() => handlePrevClick()}
        />
        <img
          className="arrow right-arrow"
          src={rightArrow}
          alt="right-arrow"
          onClick={() => handleNextClick()}
        />
        <p className="slideshow-counter">{currentIndex + 1}/{pictures.length}</p>
      </div>
    );
};

export default SlideShow;

