import React from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 pt-5 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1].map((item) => (
            <CartItems />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-8 lg:mt-0">
          <div className="border bg-white border-[#4f332c] rounded-xl shadow-lg shadow-[#706460]">
            <p className="uppercase opacity-70 text-gray-900 text-center font-sans font-semibold lg:text-lg pt-4 text-md pb-3">
              Price Details
            </p>{" "}
            <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:text-opacity-100" />
            <div className="space-y-3">
              <div className="flex justify-between pt-3 px-5 py-2 lg:text-lg text-black">
                <span>Price (1 item)</span>
                <span>₹499</span>
              </div>
              <div className="flex justify-between px-5 pb-3 text-black">
                <span>Delivery Charges :</span>
                <div>
                  <span className="line-through px-2 opacity-55 text-md font-sans">
                    ₹50
                  </span>
                  <span className="text-[#388e3c]">FREE</span>
                </div>
              </div>

              <div className="px-4 lg:pb-5 border-b border-solid py-2 border-gray-300">
                <div className="flex justify-between px-1 pt-2 border-t font-semibold border-gray-300 border-dashed text-black">
                  <span className="lg:text-xl text-lg">Total Payable</span>
                  <span className="lg:text-xl text-lg font-sans">₹549</span>
                </div>
              </div>
              <div className="flex flex-row px-5 pb-3 text-md font-semibold text-[#388e3c]">
                <span>Your Total Savings on this order</span>
                <span className="px-1"> ₹300</span>
              </div>
              <div></div>
            </div>
          </div>
          {/* <Button
            className="w-full"
            variant="constained"
            sx={{
              mt: "1rem",
              px: "1.5rem",
              py: "1rem",
              bgcolor: ["#F2921D"],
              ":hover": {
                bgcolor: ["#F0A500"],
                color: "white",
              },
            }}
          >
            Place Your Order
          </Button> */}
          <button
            onClick={handleCheckout}
            className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  text-2xl"
          >
            Place your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
