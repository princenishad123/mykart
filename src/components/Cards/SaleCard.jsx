import React, { useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";

const SaleCard = ({
  image,
  title,
  price,
  subprice,
  description,
  dataAos,
  id,
}) => {
  const [value, setValue] = useState(2);

  return (
    <div
      data-aos={dataAos}
      className="w-64 max-md:w-56 max-sm:w-64 rounded-md  relative h-80 flex items-center flex-col justify-between p-2 border overflow-x-hidden"
    >
      <div className="w-24 mt-4 flex items-center justify-center overflow-hidden">
        <NavLink to={`/view/${id}`}>
          <img src={image} alt="product-image" />
        </NavLink>

        <span className="absolute flex items-center top-1 px-3 font-semibold rounded-md left-2 bg-green-100 text-green-500">
          <MdOutlineLocalOffer /> Sale
        </span>
      </div>
      <NavLink to={`/view/${id}`}>
        <div className=" text-gray-600 mt-4 ">
          <h2 className="text-md px-3 capitalize text-gray-600 font-semibold">
            {title}
          </h2>
          <div className="w-52 max-md:w-56 max-sm:w-64  px-2 ">
            <h3 className=" px-1  text-gray-500 text-md truncate">
              {description}
            </h3>
          </div>
          <div>
            <span className="text-xl px-3  text-gray-700 font-semibold">
              ₹ {price} <strike className="text-gray-500">{subprice}</strike>
            </span>
          </div>
          <div className="font-semibold px-2 my-1">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SaleCard;
