import React from "react";

const MenSection = () => {
  return (
    <div>
      <div className="pt-5 font-[cinzel] text-4xl text-center font-semibold text-[#4f332c]">
        For Him
      </div>
      <div className="pt-10 flex justify-evenly">
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            src="homecategory/menchain.png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center ">
            Chains &#8594;
          </h4>
        </div>
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            src="homecategory/menring.png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center">
            Rings &#8594;
          </h4>
        </div>
        <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
          {" "}
          <img
            className=" w-[19rem] h-[21rem] rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl "
            src="homecategory/menbrace (1).png"
            alt=""
          />
          <h4 className="text-[#4f332c] font-semibold font-[cinzel] text-2xl text-center">
            Bracelet &#8594;
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MenSection;
