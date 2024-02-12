import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const ProductCard = ({ image, title, discount }) => {
  const [value, setValue] = useState(2);
  return (
    <div className="w-48  max-md:w-36 h-64 bg-gray-100 border flex flex-col items-center justify-center">
      <div className="w-44 overflow-hidden max-md:w-36 relative h-44 max-md:h-36 ">
        <img src={image} className="" alt="" />
      </div>
      <div className="w-full p-2">
        <span className="text-sm">{discount}% OFF</span>
        <h2>{title}</h2>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
