import React from "react";

const AddressCard = () => {
  return (
    <div>
      <div className="space-y-2 px-5 py-1">
        <div className="flex flex-row">
          <div className="pr-4 font-semibold">
            <p className="lg:text-lg text-md font-[rubik]">SUNIT GUPTA</p>
          </div>
        </div>
        <div className="pb-1 lg:w-[50%] w-[85%]">
          {" "}
          <span className=" lg:text-lg text-md font-[rubik]">
            House no. 60 , 1st floor, Gautam Nagar, New Delhi Gautam Nagar, Bada
            gurudwara New Delhi-
            <span className="font-semibold font-[rubik]">110049</span>
          </span>
        </div>{" "}
        <div className="">
          <span className="font-semibold font-[rubik] lg:text-lg pr-3">
            Phone number
          </span>
          <span className="lg:text-lg text-md">9289283915</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
