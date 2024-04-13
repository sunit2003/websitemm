// import React from "react";
// import { MainCarouselData } from "./MainCarouselData.js";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// const MainCarousel = () => {
//   const items = MainCarouselData.map((item) => (
//     <div className="relative h-full w-full ">
//       <img
//         className="cursor-pointer object-fill h-full w-full"
//         role="presentation"
//         src={item.Image}
//         alt=" "
//       />
//     </div>
//   ));

//   return (
//     <div className="carousel-container ">
//       <AliceCarousel
//         autoPlay
//         animationType="slide"
//         infinite
//         // autoPlayInterval={1000}
//         // animationType="fadeout"
//         animationDuration={3000}
//         disableButtonsControls
//         disableDotsControls
//         items={items}
//       />
//     </div>
//   );
// };

// export default MainCarousel;

import React from "react";
import { MainCarouselData } from "./MainCarouselData.js";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <div key={index} className="relative h-auto w-full">
      <img
        className="cursor-pointer object-cover h-auto lg:w-full" // Ensuring images cover their containers
        src={item.Image}
        alt={item.Description || "Jewelry item"}
      />
    </div>
  ));

  return (
    <div className="relative w-full max-w-full">
      <AliceCarousel
        autoPlay
        animationType="slide"
        infinite
        autoPlayInterval={3000}
        animationDuration={800}
        disableDotsControls
        items={items}
        renderPrevButton={() => (
          <button
            aria-label="Previous slide"
            className="absolute left-0 z-10 cursor-pointer bg-black bg-opacity-50 text-white p-2.5 border-none lg:text-2xl sm:text-lg top-1/2 -translate-y-1/2 hover:bg-opacity-80"
          >
            &#10094; {/* Left Arrow */}
          </button>
        )}
        renderNextButton={() => (
          <button
            aria-label="Next slide"
            className="absolute right-0 z-10 cursor-pointer bg-black bg-opacity-50 text-white p-2.5 border-none lg:text-2xl sm:text-lg top-1/2 -translate-y-1/2 hover:bg-opacity-80"
          >
            &#10095; {/* Right Arrow */}
          </button>
        )}
      />
    </div>
  );
};

export default MainCarousel;
