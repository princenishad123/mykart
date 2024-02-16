import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ image, title, discount, category }) => {
  return (
    <NavLink to={`products/${category}`}>
      <div
        data-aos="zoom-in"
        className="w-48 rounded-md  max-md:w-36 h-64 bg-white border flex flex-col items-center justify-center"
      >
        <div className="w-44 overflow-hidden max-md:w-36 relative h-44 max-md:h-36 grid place-items-center">
          <img
            src={image}
            className="object-scale-down w-28  max-md:w-28"
            alt=""
          />
        </div>
        <div className="w-full p-2">
          <span className="font-semibold text-md text-green-500">
            {discount}% OFF
          </span>
          <h2>{title}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
