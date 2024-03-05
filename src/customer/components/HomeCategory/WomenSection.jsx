import React from "react";

const WomenSection = () => {
  return (
    <div>
      <div className="pb-2 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
        For Her
      </div>
      <div className="mt-5 flex justify-evenly">
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            src="homecategory/mm w.png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center ">
            Necklace &#8594;
          </h4>
        </div>
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            src="homecategory/mmwe.png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center">
            Ring &#8594;
          </h4>
        </div>
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
          {" "}
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl "
            src="homecategory/mmwebsi.png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center">
            Bracelet &#8594;
          </h4>
        </div>
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 ">
          {" "}
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            src="homecategory/mmweb.png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center">
            Earings &#8594;
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WomenSection;
