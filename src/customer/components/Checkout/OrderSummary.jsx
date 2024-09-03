// import React, { useEffect } from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import CartItems from "../Cart/CartItems";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { getOrderById } from "../../../State/Order/Action";
// import { Button } from "@mui/material";
// import { createPayment } from "../../../State/Payment/Action";

// const OrderSummary = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { order } = useSelector((store) => store);
//   const searchParams = new URLSearchParams(location.search);
//   const orderId = searchParams.get("order_id");

//   useEffect(() => {
//     dispatch(getOrderById(orderId));
//   }, [orderId]);

//   // const handleCheckout = () => {
//   //   dispatch(createPayment(orderId));
//   // };
//   const handleCreatePayment = () => {
//     // const data = { orderId: order.order?._id };
//     console.log("handleCreatePayment called");
//     dispatch(createPayment(orderId));
//   };

//   return (
//     <div>
//       <div className="shadow-lg rounded-t-lg bg-[#F5F5F5] border-opacity-15 border border-[#f8b4a3]">
//         <div>
//           <h1 className="bg-[#8b7a67] font-[rubik] rounded-t-lg px-5 py-3 text-lg ">
//             DELIVERY ADDRESS
//           </h1>{" "}
//         </div>
//         <AddressCard address={order.order?.shippingAddress} />
//       </div>
//       <div>
//         <div className="lg:grid grid-cols-3 pt-5 relative  ">
//           <div className="col-span-2">
//             {order.order?.orderItems.map((item) => (
//               <CartItems item={item} />
//             ))}
//           </div>
//           <div className="px-5 sticky top-0 h-[100vh] mt-8 lg:mt-0">
//             <div className="w-80 border bg-white border-[#4f332c] border-opacity-15 rounded-xl shadow-lg shadow-[#706460] ">
//               <p className="uppercase opacity-70 text-gray-900 text-center font-sans font-semibold lg:text-lg pt-4 text-md pb-3">
//                 Price Details
//               </p>{" "}
//               <hr class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:text-opacity-100" />
//               <div className="space-y-3">
//                 <div className="flex justify-between pt-3 px-5 py-2 lg:text-lg text-black">
//                   <span>Price</span>
//                   <span>₹{order.order?.totalPrice}</span>
//                 </div>
//                 <div className="flex justify-between px-5 pb-3 text-black">
//                   <span>Delivery Charges :</span>
//                   <div>
//                     <span className="line-through px-2 opacity-55 text-md font-sans">
//                       ₹50
//                     </span>
//                     <span className="text-[#388e3c]">FREE</span>
//                   </div>
//                 </div>

//                 <div className="px-4 lg:pb-5 border-b border-solid py-2 border-gray-300">
//                   <div className="flex justify-between px-1 pt-2 border-t font-semibold border-gray-300 border-dashed text-black">
//                     <span className="lg:text-xl text-lg">Total Payable</span>
//                     <span className="lg:text-xl text-lg font-sans">
//                       ₹{order.order?.totalDiscountedPrice}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-row px-5 pb-3 text-md font-semibold text-[#388e3c]">
//                   <span>Your Total Savings on this order</span>
//                   <span className="px-1"> ₹{order.order?.discount}</span>
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//             <Button
//               onClick={handleCreatePayment}
//               type="submit"
//               className="w-full"
//               variant="contained"
//               sx={{
//                 mt: "2rem",
//                 px: "1.5rem",
//                 py: "1rem",
//                 bgcolor: ["#F2921D"],
//                 ":hover": {
//                   bgcolor: ["#F0A500"],
//                   color: "white",
//                 },
//               }}
//             >
//               Place Your Order
//             </Button>
//             {/* <button
//               onClick={handleCreatePayment}
//               variant="contained"
//               type="submit"
//               className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#B19470] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  text-2xl"
//             >
//               Place your Order
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;

import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItemsCheckout from "../Cart/CartItemsCheckout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { Button, Box, Typography, Divider, Paper } from "@mui/material";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCreatePayment = () => {
    dispatch(createPayment(orderId));
  };

  return (
    <Box sx={{ padding: "1rem", bgcolor: "#f8f9fa" }}>
      {/* Delivery Address Section */}
      <Paper
        elevation={5}
        sx={{
          marginBottom: "1rem",
          padding: "1rem",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "black",
            color: "#ffffff",
            padding: "0.5rem 1rem",
            borderRadius: "4px 4px 0 0",
          }}
        >
          DELIVERY ADDRESS
        </Typography>
        <AddressCard address={order.order?.shippingAddress} />
      </Paper>

      {/* Order Items and Price Details Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "1rem",
        }}
      >
        {/* Order Items */}
        <Box sx={{ flex: 2 }}>
          {order.order?.orderItems.map((item, index) => (
            <CartItemsCheckout key={index} item={item} />
          ))}
        </Box>

        {/* Price Details */}
        <Box
          sx={{
            flex: 1,
            position: "sticky",
            top: "1rem",
            alignSelf: "start",
            width: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{ padding: "1rem", backgroundColor: "#ffffff" }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginBottom: "0.5rem" }}
            >
              Price Details
            </Typography>
            <Divider sx={{ marginBottom: "1rem" }} />
            <Box sx={{ marginBottom: "1rem" }}>
              <Typography
                variant="body1"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#388e3c",
                }}
              >
                <span>Delivery Charges:</span>
                <span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginRight: "0.5rem",
                      color: "#757575",
                    }}
                  >
                    ₹50
                  </span>
                  FREE
                </span>
              </Typography>
              <Divider sx={{ margin: "1rem 0" }} />
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <span>Total Payable</span>
                <span>₹{order.order?.totalDiscountedPrice}</span>
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "#388e3c",
                marginBottom: "1rem",
              }}
            >
              Your Total Savings on this order ₹{order.order?.discount}
            </Typography>
            <Button
              onClick={handleCreatePayment}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#f57c00",
                ":hover": { backgroundColor: "#ff9800" },
                fontWeight: "bold",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
              }}
            >
              Place Your Order
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderSummary;
