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

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../State/Auth/Action"; // Adjust the import path as needed

import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";

const CustomerRouters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        {/* <Order /> */}
        {/* <OrderDetails /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouters;
