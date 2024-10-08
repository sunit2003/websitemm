// import { useEffect, useState } from "react";
// // import { StarIcon } from "@heroicons/react/20/solid";
// import { RadioGroup } from "@headlessui/react";
// // import  from "@mui/material/Rating";
// // import { colors } from "@mui/material";
// import { Button, Grid, Rating } from "@mui/material";
// import ProductReviewCard from "./ProductReviewCard";

// // import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

// import "./SimilarProduct.css";
// import ProductCard from "../Product/ProductCard";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { findProductById } from "../../../State/Product/Action";
// import { addItemToCart } from "../../../State/Cart/Action";

// const product = {
//   sizes: [
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//   ],
//   // description:
//   //   'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   // highlights: [
//   //   "Hand cut and sewn locally",
//   //   "Dyed with our proprietary colors",
//   //   "Pre-washed & pre-shrunk",
//   //   "Ultra-soft 100% cotton",
//   // ],
//   // details:
//   //   'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };
// // const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function ProductDetails() {
//   const [selectedSize, setSelectedSize] = useState("");
//   const navigate = useNavigate();
//   const params = useParams();
//   const dispatch = useDispatch();
//   const { products } = useSelector((store) => store);

//   const handleAddToCart = () => {
//     const data = { productId: params.productId, size: selectedSize.name };
//     console.log("cart-item:", data);
//     dispatch(addItemToCart(data));
//     navigate("/cart");
//   };

//   useEffect(() => {
//     const data = { productId: params.productId };
//     dispatch(findProductById(data));
//   }, [params.productId]);

//   return (
//     <div className="bg-[#dfdcd8] lg:px-40">
//       <div className="pt-6">
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
//           {/* Image gallery */}
//           <div className="flex flex-col items-center">
//             <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//               <img
//                 src={products.product?.Image}
//                 alt={""}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             {/* {small images section} */}
//             <div className="flex flex-wrap space-x-5 justify-center">
//               {products.product?.images.map((item) => (
//                 <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 ">
//                   <img
//                     src={item.src}
//                     alt={""}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Product info */}
//           <div className="lg:col-span-1 max-h-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-5">
//             <div className="lg:col-span-2">
//               <h1 className="text-lg lg:text-xl font-[cinzel] font-semibold text-gray-900">
//                 {products.product?.title}
//               </h1>
//               {/* <h1 className="text-lg lg:text-xl font-[cinzel] text-gray-900 opacity-60 pt-1">
//                 Pretty Rose Gold Color
//               </h1> */}
//             </div>
//             {/* Options */}
//             <div className="mt-4 lg:row-span-3 lg:mt-0">
//               <h2 className="sr-only">Product information</h2>
//               <div className="flex space-x-5 items-center font-[rubik] text-gray-900 mt-6">
//                 <p className="text-green-700 text:lg lg:text-3xl">
//                   ₹{products.product?.discountedPrice}
//                 </p>
//                 <p className="opacity-50 line-through text:lg lg:text-xl">
//                   ₹{products.product?.price}
//                 </p>
//                 <p className="rounded-2xl px-3 text:lg lg:text-xl text-gray-800 bg-orange-400">
//                   {products.product?.discountPercent}%
//                 </p>
//               </div>

//               {/* Reviews */}
//               <div className="mt-6">
//                 <div>
//                   <Rating
//                     name="read-only"
//                     value={4.5}
//                     precision={0.5}
//                     readOnly
//                   />
//                   {/* <p>16 Reviews</p> */}
//                 </div>
//               </div>

//               <form className="mt-10">
//                 {/* Colors */}

//                 {/* Sizes */}
//                 <div className="mt-10">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Select Size
//                     </h3>
//                   </div>

//                   <RadioGroup
//                     value={selectedSize}
//                     onChange={setSelectedSize}
//                     className="mt-2"
//                   >
//                     <RadioGroup.Label className="sr-only">
//                       Choose a size
//                     </RadioGroup.Label>
//                     <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
//                       {/* {console.log("Sizes:", products.product?.sizes)} */}
//                       {products.product?.sizes.map((size) => (
//                         <RadioGroup.Option
//                           key={size._id}
//                           value={size.name} // Use size.name directly for selection
//                           disabled={size.quantity === 0} // Disable if quantity is 0
//                           className={({ active }) =>
//                             classNames(
//                               size.quantity > 0
//                                 ? "cursor-pointer bg-[#b5a491] text-gray-900 shadow-sm"
//                                 : "cursor-not-allowed bg-gray-50 text-gray-200",
//                               active ? "ring-2 ring-[#4f332c]" : "",
//                               "group relative flex items-center justify-center rounded-lg border-spacing-2 py-1 px-2 text-md font-[cinzel] select-none hover:bg-[#b5a491] focus:outline-none sm:flex-1 sm:py-4"
//                             )
//                           }
//                         >
//                           {({ active, checked }) => (
//                             <>
//                               <RadioGroup.Label as="span">
//                                 {size.name}
//                               </RadioGroup.Label>
//                               {size.quantity > 0 ? (
//                                 <span
//                                   className={classNames(
//                                     active ? "border" : "border-2",
//                                     checked
//                                       ? "border-[#4f332c]"
//                                       : "border-transparent",
//                                     "pointer-events-none absolute -inset-px rounded-md"
//                                   )}
//                                   aria-hidden="true"
//                                 />
//                               ) : (
//                                 <span
//                                   aria-hidden="true"
//                                   className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                 >
//                                   <svg
//                                     className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                     viewBox="0 0 100 100"
//                                     preserveAspectRatio="none"
//                                     stroke="currentColor"
//                                   >
//                                     <line
//                                       x1={0}
//                                       y1={100}
//                                       x2={100}
//                                       y2={0}
//                                       vectorEffect="non-scaling-stroke"
//                                     />
//                                   </svg>
//                                 </span>
//                               )}
//                             </>
//                           )}
//                         </RadioGroup.Option>
//                       ))}
//                     </div>
//                   </RadioGroup>
//                 </div>

//                 <Button
//                   onClick={handleAddToCart}
//                   variant="constained"
//                   sx={{
//                     mt: "2rem",
//                     px: "1.5rem",
//                     py: "1rem",
//                     bgcolor: ["#b5a491"],
//                   }}
//                 >
//                   Add To Cart
//                 </Button>
//               </form>
//             </div>

//             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//               {/* Description and details */}
//               <div>
//                 <h3 className="sr-only">Description</h3>

//                 <div className="space-y-6">
//                   <p className="text-base text-gray-900">
//                     {products.product?.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 {/* <h3 className="text-sm font-medium text-gray-900">
//                   Highlights
//                 </h3> */}

//                 {/* <div className="mt-4">
//                   <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                     {product.highlights.map((highlight) => (
//                       <li key={highlight} className="text-gray-400">
//                         <span className="text-gray-600">{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div> */}
//               </div>

//               {/* <div className="mt-10">
//                 <h2 className="text-sm font-medium text-gray-900">Details</h2>

//                 <div className="mt-4 space-y-6">
//                   <p className="text-sm text-gray-600">
//                     {products.product?.details}
//                   </p>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </section>
//         <hr class="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75 dark:text-opacity-100" />
//         {/* Rating and Reviews */}
//         <section>
//           <h1 className="font-semibold text-lg pb-4">
//             Recent Reviews and Ratings
//           </h1>

//           <div className="px-16">
//             <Grid container spacing={12}>
//               <Grid item xs={12}>
//                 <div className="space-y-8">
//                   {[1, 1].map((item) => (
//                     <ProductReviewCard />
//                   ))}
//                 </div>
//               </Grid>
//             </Grid>
//           </div>
//         </section>
//         <hr class="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75 dark:text-opacity-100" />

//         {/* Similar Products */}
//         <section className="pt-10 lg:w-[75rem]">
//           <h1 className="text-xl py-5 font-semibold">Similar Products</h1>
//           <div className="similarProductsContainer">
//             {products.products &&
//               products.products?.content?.map((item) => (
//                 <div className="similarProductCard">
//                   <ProductCard product={item} />
//                 </div>
//               ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { RadioGroup } from "@headlessui/react";
// import { Button, Grid, Rating } from "@mui/material";
// import ProductReviewCard from "./ProductReviewCard";
// import ProductCard from "../Product/ProductCard";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { findProductById } from "../../../State/Product/Action";
// import { addItemToCart } from "../../../State/Cart/Action";
// import { getCart } from "../../../State/Cart/Action";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function ProductDetails() {
//   const [selectedSize, setSelectedSize] = useState(null); // Changed to null
//   const navigate = useNavigate();
//   const params = useParams();
//   const dispatch = useDispatch();
//   const { products } = useSelector((store) => store);

//   const handleAddToCart = async () => {
//     if (selectedSize) {
//       const data = { productId: params.productId, size: selectedSize.name };
//       console.log("cart-item:", data);
//       dispatch(addItemToCart(data));
//       await dispatch(getCart());
//       navigate("/cart");
//     } else {
//       console.error("Please select a size.");
//     }
//   };

//   useEffect(() => {
//     const data = { productId: params.productId };
//     dispatch(findProductById(data));
//   }, [dispatch, params.productId]);

//   return (
//     <div className="bg-[#dfdcd8] lg:px-40">
//       <div className="pt-6">
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
//           <div className="flex flex-col items-center">
//             <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//               <img
//                 src={products.product?.Image}
//                 alt={""}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             <div className="flex flex-wrap space-x-5 justify-center">
//               {products.product?.images.map((item) => (
//                 <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 ">
//                   <img
//                     src={item.src}
//                     alt={""}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-1 max-h-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-5">
//             <div className="lg:col-span-2">
//               <h1 className="text-lg lg:text-xl font-[cinzel] font-semibold text-gray-900">
//                 {products.product?.title}
//               </h1>
//             </div>
//             <div className="mt-4 lg:row-span-3 lg:mt-0">
//               <h2 className="sr-only">Product information</h2>
//               <div className="flex space-x-5 items-center font-[rubik] text-gray-900 mt-6">
//                 <p className="text-green-700 text:lg lg:text-3xl">
//                   ₹{products.product?.discountedPrice}
//                 </p>
//                 <p className="opacity-50 line-through text:lg lg:text-xl">
//                   ₹{products.product?.price}
//                 </p>
//                 <p className="rounded-2xl px-3 text:lg lg:text-xl text-gray-800 bg-orange-400">
//                   {products.product?.discountPercent}%
//                 </p>
//               </div>

//               <div className="mt-6">
//                 <Rating name="read-only" value={4.5} precision={0.5} readOnly />
//               </div>

//               <form className="mt-10">
//                 <div className="mt-10">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-sm font-medium text-gray-900">
//                       Select Size
//                     </h3>
//                   </div>

//                   <RadioGroup
//                     value={selectedSize}
//                     onChange={setSelectedSize}
//                     className="mt-2"
//                   >
//                     <RadioGroup.Label className="sr-only">
//                       Choose a size
//                     </RadioGroup.Label>
//                     <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
//                       {products.product?.sizes.map((size) => (
//                         <RadioGroup.Option
//                           key={size._id}
//                           value={size} // Pass the entire size object
//                           disabled={size.quantity === 0}
//                           className={({ active }) =>
//                             classNames(
//                               size.quantity > 0
//                                 ? "cursor-pointer bg-[#b5a491] text-gray-900 shadow-sm"
//                                 : "cursor-not-allowed bg-gray-50 text-gray-200",
//                               active ? "ring-2 ring-[#4f332c]" : "",
//                               "group relative flex items-center justify-center rounded-lg border-spacing-2 py-1 px-2 text-md font-[cinzel] select-none hover:bg-[#b5a491] focus:outline-none sm:flex-1 sm:py-4"
//                             )
//                           }
//                         >
//                           {({ active, checked }) => (
//                             <>
//                               <RadioGroup.Label as="span">
//                                 {size.name}
//                               </RadioGroup.Label>
//                               {size.quantity > 0 ? (
//                                 <span
//                                   className={classNames(
//                                     active ? "border" : "border-2",
//                                     checked
//                                       ? "border-[#4f332c]"
//                                       : "border-transparent",
//                                     "pointer-events-none absolute -inset-px rounded-md"
//                                   )}
//                                   aria-hidden="true"
//                                 />
//                               ) : (
//                                 <span
//                                   aria-hidden="true"
//                                   className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                 >
//                                   <svg
//                                     className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                     viewBox="0 0 100 100"
//                                     preserveAspectRatio="none"
//                                     stroke="currentColor"
//                                   >
//                                     <line
//                                       x1={0}
//                                       y1={100}
//                                       x2={100}
//                                       y2={0}
//                                       vectorEffect="non-scaling-stroke"
//                                     />
//                                   </svg>
//                                 </span>
//                               )}
//                             </>
//                           )}
//                         </RadioGroup.Option>
//                       ))}
//                     </div>
//                   </RadioGroup>
//                 </div>

//                 <Button
//                   onClick={handleAddToCart}
//                   variant="contained"
//                   sx={{
//                     mt: "2rem",
//                     px: "1.5rem",
//                     py: "1rem",
//                     bgcolor: ["#b5a491"],
//                   }}
//                 >
//                   Add To Cart
//                 </Button>
//               </form>
//             </div>

//             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//               <div>
//                 <h3 className="sr-only">Description</h3>

//                 <div className="space-y-6">
//                   <p className="text-base text-gray-900">
//                     {products.product?.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <hr class="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75 dark:text-opacity-100" />

//         <section>
//           <h1 className="font-semibold text-lg pb-4">
//             Recent Reviews and Ratings
//           </h1>

//           <div className="px-16">
//             <Grid container spacing={12}>
//               <Grid item xs={12}>
//                 <div className="space-y-8">
//                   {[1, 1].map((item) => (
//                     <ProductReviewCard />
//                   ))}
//                 </div>
//               </Grid>
//             </Grid>
//           </div>
//         </section>
//         <hr class="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75 dark:text-opacity-100" />

//         <section className="pt-10 lg:w-[75rem]">
//           <h1 className="text-xl py-5 font-semibold">Similar Products</h1>
//           <div className="similarProductsContainer">
//             {products.products &&
//               products.products?.content?.map((item) => (
//                 <ProductCard product={item} />
//               ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { RadioGroup } from "@headlessui/react";
// import { Button, Grid, Rating } from "@mui/material";
// import ProductReviewCard from "./ProductReviewCard";
// import ProductCard from "../Product/ProductCard";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { findProductById } from "../../../State/Product/Action";
// import { addItemToCart, getCart } from "../../../State/Cart/Action";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function ProductDetails() {
//   const [selectedSize, setSelectedSize] = useState(null);
//   const navigate = useNavigate();
//   const params = useParams();
//   const dispatch = useDispatch();
//   const { products } = useSelector((store) => store);

//   const handleAddToCart = async () => {
//     if (selectedSize) {
//       const data = { productId: params.productId, size: selectedSize.name };
//       dispatch(addItemToCart(data));
//       await dispatch(getCart());
//       navigate("/cart");
//     } else {
//       // Alert user to select a size
//       alert("Please select a size before adding to cart.");
//     }
//   };

//   useEffect(() => {
//     const data = { productId: params.productId };
//     dispatch(findProductById(data));
//   }, [dispatch, params.productId]);

//   return (
//     <div className="bg-[#dfdcd8] lg:px-40">
//       <div className="pt-6">
//         {/* Product Details Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
//           <div className="flex flex-col items-center">
//             {/* Main Product Image */}
//             <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//               <img
//                 src={products.product?.Image}
//                 alt={products.product?.title || ""}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//             {/* Thumbnail Images */}
//             <div className="flex flex-wrap space-x-5 justify-center mt-4">
//               {products.product?.images.map((item, index) => (
//                 <div
//                   key={index}
//                   className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]"
//                 >
//                   <img
//                     src={item.src}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="h-full w-full object-cover object-center"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="lg:col-span-1 max-h-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-5">
//             <h1 className="text-lg lg:text-xl font-[cinzel] font-semibold text-gray-900">
//               {products.product?.title}
//             </h1>

//             <div className="flex space-x-5 items-center font-[rubik] text-gray-900 mt-6">
//               <p className="text-green-700 text-lg lg:text-3xl">
//                 ₹{products.product?.discountedPrice}
//               </p>
//               <p className="opacity-50 line-through text-lg lg:text-xl">
//                 ₹{products.product?.price}
//               </p>
//               <p className="rounded-2xl px-3 text-lg lg:text-xl text-gray-800 bg-orange-400">
//                 {products.product?.discountPercent}%
//               </p>
//             </div>

//             <div className="mt-6">
//               <Rating name="read-only" value={4.5} precision={0.5} readOnly />
//             </div>

//             {/* Size Selection */}
//             <form className="mt-10">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-medium text-gray-900">
//                   Select Size
//                 </h3>
//               </div>

//               <RadioGroup
//                 value={selectedSize}
//                 onChange={setSelectedSize}
//                 className="mt-2"
//               >
//                 <RadioGroup.Label className="sr-only">
//                   Choose a size
//                 </RadioGroup.Label>
//                 <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
//                   {products.product?.sizes.map((size) => (
//                     <RadioGroup.Option
//                       key={size._id}
//                       value={size}
//                       disabled={size.quantity === 0}
//                       className={({ active }) =>
//                         classNames(
//                           size.quantity > 0
//                             ? "cursor-pointer bg-[#b5a491] text-gray-900 shadow-sm"
//                             : "cursor-not-allowed bg-gray-50 text-gray-200",
//                           active ? "ring-2 ring-[#4f332c]" : "",
//                           "group relative flex items-center justify-center rounded-lg border-spacing-2 py-1 px-2 text-md font-[cinzel] select-none hover:bg-[#b5a491] focus:outline-none sm:flex-1 sm:py-4"
//                         )
//                       }
//                     >
//                       {({ active, checked }) => (
//                         <>
//                           <RadioGroup.Label as="span">
//                             {size.name}
//                           </RadioGroup.Label>
//                           {size.quantity > 0 ? (
//                             <span
//                               className={classNames(
//                                 active ? "border" : "border-2",
//                                 checked
//                                   ? "border-[#4f332c]"
//                                   : "border-transparent",
//                                 "pointer-events-none absolute -inset-px rounded-md"
//                               )}
//                               aria-hidden="true"
//                             />
//                           ) : (
//                             <span
//                               aria-hidden="true"
//                               className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                             >
//                               <svg
//                                 className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                 viewBox="0 0 100 100"
//                                 preserveAspectRatio="none"
//                                 stroke="currentColor"
//                               >
//                                 <line
//                                   x1={0}
//                                   y1={100}
//                                   x2={100}
//                                   y2={0}
//                                   vectorEffect="non-scaling-stroke"
//                                 />
//                               </svg>
//                             </span>
//                           )}
//                         </>
//                       )}
//                     </RadioGroup.Option>
//                   ))}
//                 </div>
//               </RadioGroup>

//               {/* Add to Cart Button */}
//               <Button
//                 onClick={handleAddToCart}
//                 variant="contained"
//                 sx={{
//                   mt: "2rem",
//                   px: "1.5rem",
//                   py: "1rem",
//                   bgcolor: ["#b5a491"],
//                 }}
//               >
//                 Add To Cart
//               </Button>
//             </form>
//           </div>
//         </section>

//         {/* Divider */}
//         <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75" />

//         {/* Reviews Section */}
//         <section>
//           <h1 className="font-semibold text-lg pb-4">
//             Recent Reviews and Ratings
//           </h1>
//           <div className="px-16">
//             <Grid container spacing={12}>
//               <Grid item xs={12}>
//                 <div className="space-y-8">
//                   {[1, 1].map((_, index) => (
//                     <ProductReviewCard key={index} />
//                   ))}
//                 </div>
//               </Grid>
//             </Grid>
//           </div>
//         </section>

//         {/* Divider */}
//         <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75" />

//         {/* Similar Products Section */}
//         {/* <section className="pt-10 lg:w-[75rem]">
//           <h1 className="text-xl py-5 font-semibold">Similar Products</h1>

//           <div className="similarProductsContainer">
//             {products.products &&
//               products.products?.content?.map((item) => (
//                 <ProductCard product={item} />
//               ))}
//           </div>
//         </section> */}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Button, Grid, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import ProductCard from "../Product/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../State/Product/Action";
import { addItemToCart, getCart } from "../../../State/Cart/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const handleAddToCart = async () => {
    if (selectedSize) {
      const data = { productId: params.productId, size: selectedSize.name };
      dispatch(addItemToCart(data));
      await dispatch(getCart());
      // navigate("/");
    } else {
      // Show professional toast notification
      toast.error("Please select a size before adding to cart.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductById(data));
  }, [dispatch, params.productId]);

  return (
    <div className="bg-[#dfdcd8] lg:px-40">
      <ToastContainer />
      <div className="pt-6">
        {/* Product Details Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          <div className="flex flex-col items-center">
            {/* Main Product Image */}
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.product?.Image}
                alt={products.product?.title || ""}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* Thumbnail Images */}
            <div className="flex flex-wrap space-x-5 justify-center mt-4">
              {products.product?.images.map((item, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]"
                >
                  <img
                    src={item.src}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1 max-h-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-5">
            <h1 className="text-lg lg:text-xl font-[cinzel] font-semibold text-gray-900">
              {products.product?.title}
            </h1>

            <div className="flex space-x-5 items-center font-[rubik] text-gray-900 mt-6">
              <p className="text-green-700 text-lg lg:text-3xl">
                ₹{products.product?.discountedPrice}
              </p>
              <p className="opacity-50 line-through text-lg lg:text-xl">
                ₹{products.product?.price}
              </p>
              <p className="rounded-2xl px-3 text-lg lg:text-xl text-gray-800 bg-orange-400">
                {products.product?.discountPercent}%
              </p>
            </div>

            <div className="mt-6">
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            </div>

            {/* Size Selection */}
            <form className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  Select Size
                </h3>
              </div>

              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-2"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a size
                </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {products.product?.sizes.map((size) => (
                    <RadioGroup.Option
                      key={size._id}
                      value={size}
                      disabled={size.quantity === 0}
                      className={({ active }) =>
                        classNames(
                          size.quantity > 0
                            ? "cursor-pointer bg-[#b5a491] text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          active ? "ring-2 ring-[#4f332c]" : "",
                          "group relative flex items-center justify-center rounded-lg border-spacing-2 py-1 px-2 text-md font-[cinzel] select-none hover:bg-[#b5a491] focus:outline-none sm:flex-1 sm:py-4"
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            {size.name}
                          </RadioGroup.Label>
                          {size.quantity > 0 ? (
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-[#4f332c]"
                                  : "border-transparent",
                                "pointer-events-none absolute -inset-px rounded-md"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                variant="contained"
                sx={{
                  mt: "2rem",
                  px: "1.5rem",
                  py: "1rem",
                  bgcolor: ["#b5a491"],
                }}
              >
                Add To Cart
              </Button>
            </form>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75" />

        {/* Reviews Section */}
        <section>
          <h1 className="font-semibold text-lg pb-4">
            Recent Reviews and Ratings
          </h1>
          <div className="px-16">
            <Grid container spacing={12}>
              <Grid item xs={12}>
                <div className="space-y-8">
                  {[1, 1].map((_, index) => (
                    <ProductReviewCard key={index} />
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Divider */}
        <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75" />

        {/* Similar Products Section */}
        {/* <section className="pt-10 lg:w-[75rem]">
          <h1 className="text-xl py-5 font-semibold">Similar Products</h1>

          <div className="similarProductsContainer">
            {products.products &&
              products.products?.content?.map((item) => (
                <ProductCard product={item} />
              ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}
