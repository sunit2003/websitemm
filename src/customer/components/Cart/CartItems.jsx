import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
// import { Button } from "@mui/material";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id));
  };
  return (
    <div className="py-5 px-10 mb-2 shadow-lg border bg-white border-[#4f332c] border-opacity-15 rounded-md">
      <div className="flex items-center ">
        <div className="w-[10rem] h-[10rem] md:w-[12rem] lg:h-[12rem]">
          <img
            className="w-full h-full object-cover object-top cursor-pointer hover:shadow-xl shadow-black}"
            src={item.product?.Image}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 ">
          <p className=" font-semibold first-letter:uppercase">
            {item.product?.title}
          </p>
          <p className="opacity-70">Size: {item.size}</p>
          <p className="opacity-70 first-letter:uppercase">
            {item.product?.color}
          </p>
          <div className="flex space-x-3 items-center font-[rubik] text-gray-900 pt-5">
            <p className="text:lg lg:text-3xl">₹{item.discountedPrice}</p>
            <p className="opacity-50 line-through text:lg lg:text-xl">
              ₹{item.price}
            </p>
            <p className="text-green-700 text:lg lg:text-lg">
              {item.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-4">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon
              sx={{ color: "black", fontSize: "25px" }}
            />
          </IconButton>
          <span className="py-1 px-3 border-2  border-[#4f332c] rounded-xl">
            {item.quantity}
          </span>
          <IconButton onClick={() => handleUpdateCartItem(1)}>
            <AddCircleOutlineIcon sx={{ color: "black", fontSize: "25px" }} />
          </IconButton>
          <div className="ml-3 lg:ml-2">
            {/* <Button
              sx={{
                color: "white",
                bgcolor: "#705148",

                ":hover": { bgcolor: "#4f332c" },
              }}
            >
              {" "}
              remove
              <DeleteOutlineIcon />
            </Button> */}
            <button
              class="inline-flex items-center px-2 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
              onClick={handleRemoveCartItem}
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
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

// import { IconButton } from "@mui/material";
// import React from "react";
// import { useDispatch } from "react-redux";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
// // import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// // import Button from "@mui/material/Button";

// const CartItems = ({ item }) => {
//   const dispatch = useDispatch();
//   const handleUpdateCartItem = (num) => {
//     const data = {
//       data: { quantity: item.quantity + num },
//       cartItemId: item?._id,
//     };
//     dispatch(updateCartItem(data));
//   };

//   const handleRemoveCartItem = () => {
//     dispatch(removeCartItem(item._id));
//   };
//   return (
//     <div className="py-5 px-10 mb-2 shadow-lg border bg-white border-[#4f332c] border-opacity-15 rounded-md">
//       <div className="flex items-center ">
//         <div className="w-[10rem] h-[10rem] md:w-[12rem] lg:h-[12rem]">
//           <img
//             className="w-full h-full object-cover object-top cursor-pointer hover:shadow-xl shadow-black}"
//             src={item.product?.Image}
//             alt=""
//           />
//         </div>
//         <div className="ml-5 space-y-1 ">
//           <p className=" font-semibold first-letter:uppercase">
//             {item.product?.title}
//           </p>
//           <p className="opacity-70">Size: {item.size}</p>
//           <p className="opacity-70 first-letter:uppercase">
//             {item.product?.color}
//           </p>
//           <div className="flex space-x-3 items-center font-[rubik] text-gray-900 pt-5">
//             <p className="text:lg lg:text-3xl">₹{item.discountedPrice}</p>
//             <p className="opacity-50 line-through text:lg lg:text-xl">
//               ₹{item.price}
//             </p>
//             <p className="text-green-700 text:lg lg:text-lg">
//               {item.product?.discountPercent}% off
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="lg:flex items-center lg:space-x-10 pt-4">
//         <div className="flex items-center space-x-4">
//           <IconButton
//             onClick={() => handleUpdateCartItem(-1)}
//             disabled={item.quantity <= 1}
//           >
//             <RemoveCircleOutlineIcon
//               sx={{ color: "black", fontSize: "25px" }}
//             />
//           </IconButton>
//           <span className="py-1 px-3 border-2  border-[#4f332c] rounded-xl">
//             {item.quantity}
//           </span>
//           <IconButton onClick={() => handleUpdateCartItem(1)}>
//             <AddCircleOutlineIcon sx={{ color: "black", fontSize: "25px" }} />
//           </IconButton>
//           <div className="ml-3 lg:ml-2">
//             {/* <Button
//               sx={{
//                 color: "white",
//                 bgcolor: "#705148",

//                 ":hover": { bgcolor: "#4f332c" },
//               }}
//             >
//               remove
//               <DeleteOutlineIcon />
//             </Button> */}
//             <button
//               class="inline-flex items-center px-2 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
//               onClick={handleRemoveCartItem}
//             >
//               <svg
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="h-5 w-5 mr-2"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                   strokeWidth="2"
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                 ></path>
//               </svg>
//               Remove
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
