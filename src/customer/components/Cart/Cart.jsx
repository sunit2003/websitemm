// import React, { useEffect } from "react";
// import CartItems from "./CartItems";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";
// import { store } from "../../../State/store";

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { cart } = useSelector((store) => store);
//   const handleCheckout = () => {
//     navigate("/checkout?step=2");
//   };

//   useEffect(() => {
//     dispatch(getCart());
//   }, [cart.updateCartItem, cart.deleteCartItem]);
//   return (
//     <div>
//       <div className="lg:grid grid-cols-3 pt-5 lg:px-16 relative">
//         <div className="col-span-2">
//           {cart.cart?.cartItems.map((item) => (
//             <CartItems item={item} />
//           ))}
//         </div>
//         <div className="px-5 sticky top-0 h-[100vh] mt-8 lg:mt-0">
//           <div className="border bg-white border-[#4f332c] rounded-xl shadow-lg shadow-[#706460]">
//             <p className="uppercase opacity-70 text-gray-900 text-center font-sans font-semibold lg:text-lg pt-4 text-md pb-3">
//               Price Details
//             </p>{" "}
//             <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:text-opacity-100" />
//             <div className="space-y-3">
//               <div className="flex justify-between px-5 py-2 lg:text-lg text-black">
//                 <span>Price</span>
//                 <span>₹{cart.cart?.totalPrice}</span>
//               </div>
//               <div className="flex justify-between py-2 px-5 lg:text-lg text-black">
//                 <span>Discount</span>
//                 <span>-₹{cart.cart?.discount}</span>
//               </div>
//               <div className="flex justify-between py-2 px-5 pb-3 text-black">
//                 <span>Delivery Charges :</span>
//                 <div>
//                   <span className="line-through px-2 opacity-55 text-md font-sans">
//                     ₹50
//                   </span>
//                   <span className="text-[#388e3c]">FREE</span>
//                 </div>
//               </div>

//               <div className="px-4 lg:pb-5 border-b border-solid py-2 border-gray-300">
//                 <div className="flex justify-between px-1 pt-2 border-t font-semibold border-gray-300 border-dashed text-black">
//                   <span className="lg:text-xl text-lg">Total Payable</span>
//                   <span className="lg:text-xl text-lg font-sans">
//                     ₹{cart.cart?.totalDiscountedPrice}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex flex-row px-5 pb-3 text-md font-semibold text-[#388e3c]">
//                 <span>Your Total Savings on this order</span>
//                 <span className="px-1">₹{cart.cart?.discount}</span>
//               </div>
//               <div></div>
//             </div>
//           </div>
//           {/* <Button
//             className="w-full"
//             variant="constained"
//             sx={{
//               mt: "1rem",
//               px: "1.5rem",
//               py: "1rem",
//               bgcolor: ["#F2921D"],
//               ":hover": {
//                 bgcolor: ["#F0A500"],
//                 color: "white",
//               },
//             }}
//           >
//             Place Your Order
//           </Button> */}
//           <button
//             onClick={handleCheckout}
//             className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  text-2xl"
//           >
//             Place your Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import CartItems from "./CartItems";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { cart } = useSelector((store) => store);

//   const handleCheckout = () => {
//     navigate("/checkout?step=2");
//   };

//   const handleShopNow = () => {
//     navigate("/");
//   };

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch, cart.updateCartItem, cart.deleteCartItem]);

//   return (
//     <div>
//       <div className="lg:grid grid-cols-3 pt-5 lg:px-16 relative">
//         <div className="col-span-2">
//           {cart.cart?.cartItems.length > 0 ? (
//             cart.cart.cartItems.map((item) => (
//               <CartItems key={item.id} item={item} />
//             ))
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </div>
//         <div className="px-5 sticky top-0 h-[100vh] mt-8 lg:mt-0">
//           {cart.cart?.cartItems.length > 0 && (
//             <div className="border bg-white border-[#4f332c] rounded-xl shadow-lg shadow-[#706460]">
//               <p className="uppercase opacity-70 text-gray-900 text-center font-sans font-semibold lg:text-lg pt-4 text-md pb-3">
//                 Price Details
//               </p>
//               <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:text-opacity-100" />
//               <div className="space-y-3">
//                 <div className="flex justify-between px-5 py-2 lg:text-lg text-black">
//                   <span>Price</span>
//                   <span>₹{cart.cart?.totalPrice}</span>
//                 </div>
//                 <div className="flex justify-between py-2 px-5 lg:text-lg text-black">
//                   <span>Discount</span>
//                   <span>-₹{cart.cart?.discount}</span>
//                 </div>
//                 <div className="flex justify-between py-2 px-5 pb-3 text-black">
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
//                       ₹{cart.cart?.totalDiscountedPrice}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-row px-5 pb-3 text-md font-semibold text-[#388e3c]">
//                   <span>Your Total Savings on this order</span>
//                   <span className="px-1">₹{cart.cart?.discount}</span>
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//           )}
//           {cart.cart?.cartItems.length === 0 && (
//             <button
//               onClick={handleShopNow}
//               className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl"
//             >
//               Shop Now
//             </button>
//           )}
//           {cart.cart?.cartItems.length > 0 && (
//             <button
//               onClick={handleCheckout}
//               className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl"
//             >
//               Place your Order
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useEffect, useState } from "react";
// import CartItems from "./CartItems";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";
// import AuthModal from "../../Auth/AuthModal"; // Adjust the path as needed

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { cart } = useSelector((store) => store);

//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const isAuthenticated = !!localStorage.getItem("jwt");

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(getCart());
//     } else {
//       setShowAuthModal(true);
//     }
//   }, [dispatch, isAuthenticated]);

//   const handleCheckout = () => {
//     if (isAuthenticated) {
//       navigate("/checkout?step=2");
//     } else {
//       setShowAuthModal(true);
//     }
//   };

//   const handleShopNow = () => {
//     navigate("/");
//   };
//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch, cart.updateCartItem, cart.deleteCartItem]);

//   return (
//     <div>
//       <div className="lg:grid grid-cols-3 pt-5 lg:px-16 relative">
//         <div className="col-span-2">
//           {cart.cart?.cartItems.length > 0
//             ? cart.cart.cartItems.map((item) => (
//                 <CartItems key={item.id} item={item} />
//               ))
//             : [
//                 <p>Your cart is empty</p>,
//                 <img src="https://github.com/sunit2003/websitemm/blob/main/public/AnimationEmptyCart.gif" />,
//               ]}
//         </div>
//         <div className="px-5 sticky top-0 h-[100vh] mt-8 lg:mt-0">
//           {cart.cart?.cartItems.length > 0 && (
//             <div className="border bg-white border-[#4f332c] rounded-xl shadow-lg shadow-[#706460]">
//               <p className="uppercase opacity-70 text-gray-900 text-center font-sans font-semibold lg:text-lg pt-4 text-md pb-3">
//                 Price Details
//               </p>
//               <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:text-opacity-100" />
//               <div className="space-y-3">
//                 <div className="flex justify-between px-5 py-2 lg:text-lg text-black">
//                   <span>Price</span>
//                   <span>₹{cart.cart?.totalPrice}</span>
//                 </div>
//                 <div className="flex justify-between py-2 px-5 lg:text-lg text-black">
//                   <span>Discount</span>
//                   <span>-₹{cart.cart?.discount}</span>
//                 </div>
//                 <div className="flex justify-between py-2 px-5 pb-3 text-black">
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
//                       ₹{cart.cart?.totalDiscountedPrice}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-row px-5 pb-3 text-md font-semibold text-[#388e3c]">
//                   <span>Your Total Savings on this order</span>
//                   <span className="px-1">₹{cart.cart?.discount}</span>
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//           )}
//           {cart.cart?.cartItems.length === 0 && (
//             <button
//               onClick={handleShopNow}
//               className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl"
//             >
//               Shop Now
//             </button>
//           )}
//           {cart.cart?.cartItems.length > 0 && (
//             <button
//               onClick={handleCheckout}
//               className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl"
//             >
//               Place your Order
//             </button>
//           )}
//         </div>
//       </div>

//       {showAuthModal && (
//         <AuthModal
//           open={showAuthModal}
//           handleClose={() => setShowAuthModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import AuthModal from "../../Auth/AuthModal"; // Adjust the path as needed

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const isAuthenticated = !!localStorage.getItem("jwt");

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCart());
    } else {
      setShowAuthModal(true);
    }
  }, [dispatch, isAuthenticated]);

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/checkout?step=2");
    } else {
      setShowAuthModal(true);
    }
  };

  const handleShopNow = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-5">
      {cart.cart?.cartItems.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {cart.cart.cartItems.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-8 lg:mt-0">
            <div className="border bg-white border-[#4f332c] rounded-xl shadow-lg shadow-[#706460]">
              <p className="uppercase opacity-70 text-gray-900 text-center font-sans font-semibold lg:text-lg pt-4 text-md pb-3">
                Price Details
              </p>
              <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-80 dark:text-opacity-100" />
              <div className="space-y-3">
                <div className="flex justify-between px-5 py-2 lg:text-lg text-black">
                  <span>Price</span>
                  <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between py-2 px-5 lg:text-lg text-black">
                  <span>Discount</span>
                  <span>-₹{cart.cart?.discount}</span>
                </div>
                <div className="flex justify-between py-2 px-5 pb-3 text-black">
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
                    <span className="lg:text-xl text-lg font-sans">
                      ₹{cart.cart?.totalDiscountedPrice}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row px-5 pb-3 text-md font-semibold text-[#388e3c]">
                  <span>Your Total Savings on this order</span>
                  <span className="px-1">₹{cart.cart?.discount}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-[1rem] px-8 z-30 py-4 bg-[#8b7a67] rounded-md text-white relative font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#4f332c] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 text-2xl"
            >
              Place your Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/empty-cart.png" alt="Empty Cart" className="mb-4 w-48" />
          <p className="text-2xl mb-4">Your Cart Is Empty!</p>
          <p className="text-md mb-4">Add item to it now</p>
          <button
            onClick={handleShopNow}
            className="px-8 py-4 bg-[#8b7a67] rounded-md text-white font-sans text-2xl"
          >
            Shop Now
          </button>
        </div>
      )}

      {showAuthModal && (
        <AuthModal
          open={showAuthModal}
          handleClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
};

export default Cart;
