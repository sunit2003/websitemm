// import React from "react";

// const MenSection = () => {
//   return (
//     <div>
//       <div className="pt-5 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
//         For Him
//       </div>
//       <div className="pt-10 flex flex-wrap justify-center gap-4 md:justify-evenly">
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/menchain.png"
//             alt="Men's Chains"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Chains &#8594;
//           </h4>
//         </div>
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/menring.png"
//             alt="Men's Rings"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Rings &#8594;
//           </h4>
//         </div>
//         <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
//           <img
//             className="w-full md:w-[19rem] h-auto md:h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
//             src="homecategory/menbrace (1).png"
//             alt="Men's Bracelets"
//           />
//           <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-xl md:text-2xl text-center">
//             Bracelet &#8594;
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import { navigation } from "../navigation/navigationData";

const MenSection = () => {
  const navigate = useNavigate();
  const menCategory = navigation.categories.find((cat) => cat.id === "men");
  const jewelrySection = menCategory.sections.find(
    (sec) => sec.id === "jewellery"
  );

  const handleItemClick = (item) => {
    // Constructing the path to navigate to
    const path = `/${menCategory.id}/${jewelrySection.id}/${item.id}`;
    // Navigating to the specified path
    navigate(path);
    // Reloading the page after navigation
    window.location.href = window.location.origin + path; // This forces a page reload
  };

  return (
    <div>
      <div className="pb-2 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
        For Him
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

export default MenSection;
