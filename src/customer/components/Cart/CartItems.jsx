import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { blue } from "@mui/material/colors";

const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border bg-white border-[#4f332c] rounded-md">
      <div className="flex items-center ">
        <div className="w-[10rem] h-[10rem] lg:w-[17rem] lg:h-[17rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="Bracelet/crossed roman numeral bracelet/Third-Picture-6-scaled.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 ">
          <p className="font-[cinzel] font-semibold">
            Crossed Roman Numeral Bracelet
          </p>
          <p className="opacity-70">Size:15</p>
          <p className="opacity-70">Color:RoseGold</p>
          <div className="flex space-x-3 items-center font-[rubik] text-gray-900 pt-5">
            <p className="text:lg lg:text-3xl">₹499</p>
            <p className="opacity-50 line-through text:lg lg:text-xl">₹799</p>
            <p className="text-green-700 text:lg lg:text-lg">30%</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:ml-10 lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon sx={{ color: "black" }} />
          </IconButton>
          <span className="py-1 px-7 border-2  border-[#4f332c] rounded-xl">
            2
          </span>
          <IconButton>
            <AddCircleOutlineIcon sx={{ color: "black" }} />
          </IconButton>
          <div className="pl-2 lg:pl-3">
            {/* <Button
              sx={{
                color: "white",
                bgcolor: "#705148",

                ":hover": { bgcolor: "#4f332c" },
              }}
            >
              remove
              <DeleteOutlineIcon />
            </Button> */}
            <button class="inline-flex items-center px-2 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
