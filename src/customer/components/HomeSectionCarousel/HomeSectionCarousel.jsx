// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// // import SectionName from "customer/pages/HomePage/HomePage";
// // import { Button } from "@mui/material";
// // import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// // import { useState } from "react";
// // import { RingCards } from "../../../Data/RingCards";

// const HomeSectionCarousel = ({ data, SectionName }) => {
//   // const [activeIndex, setActiveIndex] = useState(0);

//   // const slidePrev = () => setActiveIndex(activeIndex - 1);
//   // const slideNext = () => setActiveIndex(activeIndex + 1);
//   // const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5 },
//   };

//   const items = data.map((item) => <HomeSectionCard product={item} />);

//   return (
//     <div className="relative px-2 shadow-md rounded-2xl shadow-[#aa9d8f] sm:px-5 lg:px-2 w-full">
//       <h1 className="text-3xl font-bold font-[cinzel] px-1 py-3 text-center text-[#705148]">
//         {SectionName}
//       </h1>
//       <div className="relative p-5 ">
//         <AliceCarousel
//           disableButtonsControls
//           disableDotsControls
//           autoPlay
//           autoPlayInterval={500}
//           items={items}
//           infinite
//           // activeIndex={activeIndex}
//           responsive={responsive}
//           // onSlideChanged={syncActiveIndex}
//           animationType="fadeout"
//           animationDuration={800}
//         />

//         {/* {activeIndex !== items.length - 5 && (
//           <Button
//             onClick={slideNext}
//             variant="contained"
//             className="z-50"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               className=""
//               sx={{ transform: "rotate(90deg)" }}
//             />
//           </Button>
//         )}

//         {activeIndex !== 0 && (
//           <Button
//             variant="contained"
//             onClick={slidePrev}
//             className="z-50"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%)  rotate(-90deg)",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon sx={{ transform: " rotate(90deg)" }} />
//           </Button>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;

// /* // import AliceCarousel from "react-alice-carousel";
// // import HomeProductCard from "./HomeProductCard";
// // import "./HomeProductSection.css";
// // import { Button } from "@mui/material";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import { useState } from "react";

// // const HomeSectionCard = ({ section, data }) => {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const slidePrev = () => setActiveIndex(activeIndex - 1);
// //   const slideNext = () => setActiveIndex(activeIndex + 1);
// //   const syncActiveIndex = ({ item }) => setActiveIndex(item);

// //   const responsive = {
// //     0: {
// //       items: 2,
// //       itemsFit: "contain",
// //     },
// //     568: {
// //       items: 3,
// //       itemsFit: "contain",
// //     },
// //     1024: {
// //       items: 5.5,
// //       itemsFit: "contain",
// //     },
// //   };
// //   const items = data?.slice(0, 10).map((item) => (
// //     <div className="">
// //       {" "}
// //       <HomeProductCard product={item} />
// //     </div>
// //   ));

// //   return (
// //     <div className="relative px-4 sm:px-6 lg:px-8 ">
// //       <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
// //       <div className="relative border p-5">
// //         <AliceCarousel
// //           disableButtonsControls
// //           disableDotsControls
// //           mouseTracking
// //           items={items}
// //           activeIndex={activeIndex}
// //           responsive={responsive}
// //           onSlideChanged={syncActiveIndex}
// //           animationType="fadeout"
// //           animationDuration={2000}
// //         />
// //         {activeIndex !== items.length - 5 && (
// //           <Button
// //             onClick={slideNext}
// //             variant="contained"
// //             className="z-50 bg-[]"
// //             sx={{
// //               position: "absolute",
// //               top: "8rem",
// //               right: "0rem",
// //               transform: "translateX(50%) rotate(90deg)",
// //             }}
// //             color="white"
// //             aria-label="next"
// //           >
// //             <ArrowForwardIosIcon
// //               className=""
// //               sx={{ transform: "rotate(-90deg)" }}
// //             />
// //           </Button>
// //         )}

// //         {activeIndex !== 0 && (
// //           <Button
// //             onClick={slidePrev}
// //             variant="contained"
// //             className="z-50 bg-[]"
// //             color="white"
// //             sx={{
// //               position: "absolute",
// //               top: "8rem",
// //               left: "0rem",
// //               transform: "translateX(-50%)  rotate(90deg)",
// //             }}
// //             aria-label="next"
// //           >
// //             <ArrowForwardIosIcon
// //               className=""
// //               sx={{ transform: " rotate(90deg)" }}
// //             />
// //           </Button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomeSectionCarousel; */

import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = ({ data, SectionName }) => {
  const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    1024: { items: 4 },
    1440: { items: 5 },
  };

  const carousel = useRef(null);

  const items = data.map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div className="relative shadow-lg rounded-lg overflow-hidden w-full">
      <h1 className="text-3xl font-bold font-[cinzel] px-5 py-4 text-center text-[#705148] bg-white">
        {SectionName}
      </h1>
      <div className="relative px-5 py-3 bg-white">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={3000}
          items={items}
          infinite
          responsive={responsive}
          animationType="slide"
          animationDuration={800}
          touchTracking
          mouseTracking
          paddingLeft={50}
          paddingRight={50}
          ref={carousel}
        />
        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <IconButton
            onClick={() => carousel.current.slidePrev()}
            className="!bg-gray-400 !text-white !p-2 hover:!bg-gray-700 transition duration-300 ease-in-out"
            size="small"
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <IconButton
            onClick={() => carousel.current.slideNext()}
            className="!bg-gray-400 !text-white !p-2 hover:!bg-gray-700 transition duration-300 ease-in-out"
            size="small"
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
