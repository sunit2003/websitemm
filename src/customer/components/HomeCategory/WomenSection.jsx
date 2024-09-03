// import React from "react";

// const WomenSection = () => {
//   return (
//     <div>
//       <div className="pb-2 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
//         For Her
//       </div>
//       <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-evenly">
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/mm w.png"
//             alt="Necklace"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Necklace &#8594;
//           </h4>
//         </div>
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/mmwe.png"
//             alt="Ring"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Ring &#8594;
//           </h4>
//         </div>
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/mmwebsi.png"
//             alt="Bracelet"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Bracelet &#8594;
//           </h4>
//         </div>
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/mmweb.png"
//             alt="Earrings"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Earrings &#8594;
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WomenSection;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { navigation } from "../navigation/navigationData";

// const WomenSection = () => {
//   const navigate = useNavigate();

//   // Extract women's category and jewellery section
//   const womenCategory = navigation.categories.find((cat) => cat.id === "women");
//   const jewelrySection = womenCategory.sections.find(
//     (sec) => sec.id === "jewellery"
//   );

//   // Handler to navigate to the product details
//   const handleItemClick = (item) => {
//     navigate(`/${womenCategory.id}/${jewelrySection.id}/${item.id}`);
//   };

//   return (
//     <div>
//       <div className="pb-2 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
//         For Her
//       </div>
//       <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-evenly">
//         {jewelrySection.items.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => handleItemClick(item)}
//             className="cursor-pointer transition duration-300 ease-in-out hover:scale-105"
//           >
//             <img
//               className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//               src={item.src}
//               alt={item.alt}
//             />
//             <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//               {item.name} &#8594;
//             </h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WomenSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import { navigation } from "../navigation/navigationData";

const WomenSection = () => {
  const navigate = useNavigate();
  const womenCategory = navigation.categories.find((cat) => cat.id === "women");
  const jewelrySection = womenCategory.sections.find(
    (sec) => sec.id === "jewellery"
  );

  const handleItemClick = (item) => {
    // Constructing the path to navigate to
    const path = `/${womenCategory.id}/${jewelrySection.id}/${item.id}`;
    // Navigating to the specified path
    navigate(path);
    // Reloading the page after navigation
    window.location.href = window.location.origin + path; // This forces a page reload
  };

  return (
    <div>
      <div className="pb-2 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
        For Her
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-evenly">
        {jewelrySection.items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-105"
          >
            <img
              className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
              src={item.src}
              alt={item.alt}
            />
            <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
              {item.name} &#8594;
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenSection;
