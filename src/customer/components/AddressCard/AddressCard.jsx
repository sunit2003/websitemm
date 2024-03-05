import React from "react";

const AddressCard = () => {
  return (
    <div>
      <div className="space-y-2 px-5 py-1">
        <div className="flex flex-row">
          <div className="pr-4 font-semibold">
            <p className="lg:text-lg text-md font-[rubik]">Person Name</p>
          </div>
        </div>
        <div className="pb-1 lg:w-[50%] w-[85%]">
          {" "}
          <span className=" lg:text-lg text-md font-[rubik]">
            Green park , New Delhi, India
            <span className="font-semibold font-[rubik]">110016</span>
          </span>
        </div>{" "}
        <div className="">
          <span className="font-semibold font-[rubik] lg:text-lg pr-3">
            Phone number
          </span>
          <span className="lg:text-lg text-md">9987654321</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
