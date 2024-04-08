import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-2 px-5 py-1">
        <div className="flex flex-row">
          <div className="pr-4 font-semibold">
            <p className="lg:text-lg text-md font-[rubik]">
              {address.firstName + " " + address.lastName}
            </p>
          </div>
        </div>
        <div className="pb-1 lg:w-[50%] w-[85%]">
          {" "}
          <span className=" lg:text-lg text-md font-[rubik]">
            {address.streetAddress},{address.city},{address.state}
            <span className="font-semibold font-[rubik]">
              {address.pincode}
            </span>
          </span>
        </div>{" "}
        <div className="">
          <span className="font-semibold font-[rubik] lg:text-lg pr-3">
            Phone number
          </span>
          <span className="lg:text-lg text-md">{address.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
