// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Navigation from "../customer/components/navigation/Navigation";
// import Footer from "../customer/components/Footer/Footer";
// import Product from "../customer/components/Product/Product";
// // import { RingCards } from "../Data/RingCards";
// import ProductDetails from "../customer/components/ProductDetails/ProductDetails";

// // import Checkout from "./customer/components/Checkout/Checkout";

// // import Order from "./customer/components/Order/Order";
// // import OrderDetails from "./customer/components/Order/OrderDetails";

// import HomePage from "../customer/pages/HomePage/HomePage";
// // import CartItems from "../customer/components/Cart/CartItems";
// import Cart from "../customer/components/Cart/Cart";
// import Checkout from "../customer/components/Checkout/Checkout";
// import Order from "../customer/components/Order/Order";
// import OrderDetails from "../customer/components/Order/OrderDetails";

// const CustomerRouters = () => {
//   return (
//     <div>
//       <div>
//         <Navigation />
//       </div>
//       <Routes>
//         <Route path="/login" element={<HomePage />}></Route>
//         <Route path="/register" element={<HomePage />}></Route>
//         <Route path="/" element={<HomePage />}></Route>
//         <Route path="/cart" element={<Cart />}></Route>

//         <Route
//           path="/:levelOne/:levelTwo/:levelThree"
//           element={<Product />}
//         ></Route>
//         <Route path="/product/:productId" element={<ProductDetails />}></Route>
//         <Route path="/checkout" element={<Checkout />}></Route>
//         <Route path="/account/order" element={<Order />}></Route>
//         <Route
//           path="/account/order/:orderId"
//           element={<OrderDetails />}
//         ></Route>
//         {/* <Order /> */}
//         {/* <OrderDetails /> */}
//       </Routes>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CustomerRouters;

// import React, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getUser } from "../State/Auth/Action"; // Adjust the import path as needed

// import Navigation from "../customer/components/navigation/Navigation";
// import Footer from "../customer/components/Footer/Footer";
// import HomePage from "../customer/pages/HomePage/HomePage";
// import Cart from "../customer/components/Cart/Cart";
// import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
// import Checkout from "../customer/components/Checkout/Checkout";
// import Order from "../customer/components/Order/Order";
// import OrderDetails from "../customer/components/Order/OrderDetails";
// import Product from "../customer/components/Product/Product";
// import PaymentSuccess from "../customer/components/PaymentSuccess";
// import LoginForm from "../customer/Auth/LoginForm";
// import RegisterForm from "../customer/Auth/RegisterForm";
// import AuthModal from "../customer/Auth/AuthModal";

// const CustomerRouters = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//       dispatch(getUser());
//     }
//   }, [dispatch]);

//   return (
//     <div>
//       <Navigation />
//       <Routes>
//         <Route path="/login" element={<HomePage />}></Route>
//         <Route path="/register" element={<HomePage />}></Route>
//         <Route path="/" element={<HomePage />}></Route>
//         <Route path="/cart" element={<Cart />}></Route>

//         <Route
//           path="/:levelOne/:levelTwo/:levelThree"
//           element={<Product />}
//         ></Route>
//         <Route path="/product/:productId" element={<ProductDetails />}></Route>
//         <Route path="/checkout" element={<Checkout />}></Route>
//         <Route path="/account/order" element={<Order />}></Route>
//         <Route
//           path="/account/order/:orderId"
//           element={<OrderDetails />}
//         ></Route>
//         <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
//         {/* <Order /> */}
//         {/* <OrderDetails /> */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default CustomerRouters;

import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../State/Auth/Action";

import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import PaymentSuccess from "../customer/components/PaymentSuccess";
import AuthModal from "../customer/Auth/AuthModal"; // Adjust the import path as needed

const CustomerRouters = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  useEffect(() => {
    // Open modal based on location
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowAuthModal(true);
    } else {
      setShowAuthModal(false);
    }
  }, [location]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
      {showAuthModal && (
        <AuthModal
          open={showAuthModal}
          handleClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
};

export default CustomerRouters;
