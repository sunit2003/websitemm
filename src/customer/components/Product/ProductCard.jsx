// import { SvgIcon } from "@mui/material";
import React from "react";
// import StarIcon from "@mui/icons-material/Star";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
// import { yellow } from "@mui/material/colors";
import { Rating } from "@mui/material";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/Product/${5}`)}
      className="productCard w-[16rem] m-3 transition-all bg-white cursor-pointer rounded-lg"
    >
      <div>
        <img
          className="h-full w-full ab object-cover object-left-top"
          src={product.Image}
          alt="cartier"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div className="font-[cizel]">
          <p className="font-semibold">{product.title}</p>
          <p className="opacity-70">{product.detail}</p>
        </div>
        <div className="">
          <Rating
            name="read-only"
            value={product.rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="flex flex-row justify-start">
          <div>
            <p className="line-through">&#8377;{product.price}</p>
          </div>
          <div>
            <p className="px-3  text-xl font-[rubik] text-green-700">
              &#8377;{product.discountedPrice}
            </p>
          </div>
        </div>

        <span className="px-3 text-white bg-orange-400 pb-1 rounded-xl">
          {product.discountPercent}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
