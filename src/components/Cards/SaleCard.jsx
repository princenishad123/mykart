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
  const [value, setValue] = useState(4);

  return (
    <div className="w-52 max-md:w-44 max-sm:w-[150px] md:rounded-md  relative h-80 max-sm:h-64 flex items-center flex-col justify-evenly p-1 border max-sm:border-b-transparent  overflow-x-hidden ">
      <div className="w-24 max-sm:w-20 mt-1 flex items-center justify-center overflow-hidden">
        <NavLink to={`/view/${id}`}>
          <img src={image} alt="product-image" />
        </NavLink>

        <span className="absolute flex items-center top-1 text-sm px-3 font-semibold rounded-md left-2 bg-green-100 text-green-500">
          <MdOutlineLocalOffer /> Sale
        </span>
      </div>
      <NavLink to={`/view/${id}`}>
        <div className="text-gray-600 w-[100%]  ">
          <h2 className="text-md max-sm:text-sm px-2 max-md:w-44 max-sm:w-[150px] w-52  capitalize text-gray-600 truncate font-semibold">
            {title}
          </h2>

          <p className=" px-2 text-gray-500 text-md  max-sm:w-[150px] max-md:w-44 w-52 max-sm:text-sm truncate">
            {description}
          </p>

          <div>
            <span className="text-xl px-2 max-sm:text-sm  text-gray-700 font-semibold">
              ₹ {price} <strike className="text-gray-500">{subprice}</strike>
            </span>
          </div>
          <div className="font-semibold md:hidden max-sm:text-sm my-1">
            <Rating
              name="simple-controlled"
              value={value}
              size="small"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="font-semibold max-sm:text-sm max-md:hidden my-1">
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
