import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ReviewsCarousel = ({ slides }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideInnerStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[imageIndex].src})`,
    backgroundSize: "cover",
    borderRadius: "10px",
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "3px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "3px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const editorsTitle = {
    position: "absolute",
    bottom: "0px",
    paddingLeft: "2vw",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    right: "0px",
    left: "0px",
    color: "#fff",
    backgroundColor: "black",
    fontWeight: "bold",
  };

  const goBack = () => {
    const newIndex = imageIndex === 0 ? slides.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };

  const goForwards = () => {
    const newIndex = imageIndex === slides.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <div className="carousel" style={slideInnerStyles}>
        <div style={editorsTitle}>
          <Link to={slides[imageIndex].link} className="editors-title-link">
            {slides[imageIndex].title}
          </Link>
        </div>
      </div>
      <div style={leftArrow} onClick={goBack}>
        ◄
      </div>
      <div style={rightArrow} onClick={goForwards}>
        ►
      </div>
    </div>
  );
};
