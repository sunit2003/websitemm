import React from "react";
import { MainCarouselData } from "./MainCarouselData.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <div className="relative h-full w-full ">
      <img
        className="cursor-pointer object-fill h-full w-full"
        role="presentation"
        src={item.Image}
        alt=" "
      />
    </div>
  ));

  return (
    <div className="carousel-container ">
      <AliceCarousel
        autoPlay
        animationType="slide"
        infinite
        // autoPlayInterval={1000}
        // animationType="fadeout"
        animationDuration={3000}
        disableButtonsControls
        disableDotsControls
        items={items}
      />
    </div>
  );
};

export default MainCarousel;
