// import React from "react";
// import { MainCarouselData } from "./MainCarouselData.js";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// const MainCarousel = () => {
//   const items = MainCarouselData.map((item, index) => (
//     <div key={index} className="relative lg:h-full sm:h-[50rem] w-full">
//       <img
//         className="cursor-pointer object-fill rounded-3xl mx-7 my-10 lg:h-[95vh] lg:w-[95vw] sm:h-[30rem]"
//         src={item.Image}
//         alt={item.Description || "Jewelry item"}
//       />
//     </div>
//   ));

//   return (
//     <div className="relative w-full max-w-full">
//       <AliceCarousel
//         autoPlay
//         animationType="fadeout"
//         infinite
//         autoPlayInterval={3000}
//         animationDuration={800}
//         disableDotsControls
//         items={items}
//         renderPrevButton={() => (
//           <button
//             aria-label="Previous slide"
//             className="absolute left-0 z-10 cursor-pointer bg-black bg-opacity-20 rounded-full text-white md:p-2.5 sm:p-1 border-none lg:text-2xl sm:text-md top-1/2 -translate-y-1/2 hover:bg-opacity-80"
//           >
//             &#10094; {/* Left Arrow */}
//           </button>
//         )}
//         renderNextButton={() => (
//           <button
//             aria-label="Next slide"
//             className="absolute right-0 z-10 cursor-pointer bg-black bg-opacity-20 rounded-full text-white md:p-2.5 sm:p-1 border-none lg:text-2xl sm:text-md top-1/2 -translate-y-1/2 hover:bg-opacity-80"
//           >
//             &#10095; {/* Right Arrow */}
//           </button>
//         )}
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
    <div key={index} className="relative lg:h-full sm:h-[50rem] w-full">
      <img
        className="cursor-pointer object-center rounded-3xl mx-7 my-10 lg:h-[95vh] lg:w-[95vw] sm:h-[30rem] shadow-2xl shadow-orange-950"
        src={item.Image}
        alt={item.Description || "Jewelry item"}
      />
    </div>
  ));

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <AliceCarousel
        autoPlay
        infinite
        animationType="fadeout"
        autoPlayInterval={1000}
        animationDuration={800}
        disableButtonsControls // disable the previous and next buttons
        // enable the dot controls
        items={items}
        dotsClass="alice-carousel__dots" // default class, override for custom styling
        responsive={{
          0: { items: 1 }, // adjust responsive settings if necessary
          1024: { items: 1 },
        }}
      />
      <style jsx>{`
        .alice-carousel__dots {
          position: absolute;
          right: 90px;
          bottom: 50px;
        }
        .alice-carousel__dots-item {
          min-width: 10px;
          min-height: 10px;
          margin: 5px;
          border-radius: 20px;
          background: gray;
          opacity: 0.5;
          transition: opacity 0.3s, width 0.3s, ease-in-out; // Added width transition
        }
        .alice-carousel__dots-item.__active {
          background: white !important;
          opacity: 0.9;
          border-radius: 20px;
          height: 10px;
          width: 50px;
        }
      `}</style>
    </div>
  );
};

export default MainCarousel;
