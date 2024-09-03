// import React from "react";

// const HomeSectionCard = ({ product }) => {
//   return (
//     <div className="cursor-pointer flex flex-col px-5 items-center bg-[#dfdcd8] rounded-lg shadow-[#aa9d8f] shadow-2xl overflow-hidden w-[16rem]">
//       <div className="h-[19rem] w-[20rem]">
//         <img
//           className="object-cover object-left-top h-[19rem]"
//           src={product.Image}
//           alt=""
//         />
//       </div>
//       <div className="w-full py-2 bg-[#dfdcd8]">
//         <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
//         <p className="mt-2 text-sm text-gray-500">{product.detail}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;

import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[16rem] hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="h-[19rem] w-full">
        <img
          className="object-cover h-full w-full"
          src={product.Image}
          // alt={product.title}
        />
      </div>
      <div className="w-full py-2 px-3">
        {/* <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3> */}
      </div>
    </div>
  );
};

export default HomeSectionCard;
