import { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
// import  from "@mui/material/Rating";
// import { colors } from "@mui/material";
import { Button, Grid, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { RingCards } from "../../../Data/RingCards";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

import "./SimilarProduct.css";
import ProductCard from "../Product/ProductCard";
import { useNavigate } from "react-router-dom";

const product = {
  name: "Criss-Cross Screw Bracelet",
  price: "₹499",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://github.com/sunit2003/MoonMadeDatabase/blob/main/Bracelet/crossed%20roman%20numeral%20bracelet/Third-Picture-6-scaled.jpg?raw=true",
      alt: "braclet",
    },
    {
      src: "https://github.com/sunit2003/MoonMadeDatabase/blob/main/Bracelet/crossed%20roman%20numeral%20bracelet/Highlight-Pciture-scaled.jpg?raw=true",
      alt: "",
    },
    {
      src: "https://github.com/sunit2003/MoonMadeDatabase/blob/main/Bracelet/crossed%20roman%20numeral%20bracelet/Fourth-Picture-8-scaled.jpg?raw=true",
      alt: "",
    },
  ],
  colors: [
    { name: "White", class: "bg-orange-600", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-amber-400", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
// const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-[#dfdcd8] lg:px-40">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {" "}
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((items) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 ">
                  <img
                    src={items.src}
                    alt={items.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 max-h-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-5">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-[cinzel] font-semibold text-gray-900">
                {product.name}
              </h1>
              <h1 className="text-lg lg:text-xl font-[cinzel] text-gray-900 opacity-60 pt-1">
                Pretty Rose Gold Color
              </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center font-[rubik] text-gray-900 mt-6">
                <p className="text-green-700 text:lg lg:text-3xl">₹499</p>
                <p className="opacity-50 line-through text:lg lg:text-xl">
                  ₹799
                </p>
                <p className="rounded-2xl px-3 text:lg lg:text-xl text-gray-800 bg-orange-400">
                  30%
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div>
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.5}
                    readOnly
                  />
                  <p>16 Reviews</p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
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
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
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
                              {size.inStock ? (
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
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="constained"
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

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75 dark:text-opacity-100" />
        {/* Rating and Reviews */}
        <section>
          <h1 className="font-semibold text-lg pb-4">
            Recent Reviews and Ratings
          </h1>

          <div className="px-16">
            <Grid container spacing={12}>
              <Grid item xs={12}>
                <div className="space-y-8">
                  {[1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <hr class="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-75 dark:text-opacity-100" />

        {/* Similar Products */}
        <section className="pt-10 lg:w-[75rem]">
          <h1 className="text-xl py-5 font-semibold">Similar Products</h1>
          <div className="similarProductsContainer">
            {RingCards.map((item) => (
              <div className="similarProductCard">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
