import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";

const SaleCard = () => {
  return (
    <div className="w-52 max-md:w-56 max-sm:w-64 rounded-md shadow-md relative h-auto flex items-center flex-col p-2 border">
      <div className="w-32  ">
        <img
          src="https://rukminim2.flixcart.com/image/832/832/l1grgcw0/t-shirt/z/2/d/xl-indian-flag-hf16-b-teewink-original-imagdfab4hnqxz7q.jpeg?q=70&crop=true"
          alt=""
        />
        <span className="absolute flex items-center top-1 px-3 font-semibold rounded-md left-2 bg-green-100 text-green-500">
          <MdOutlineLocalOffer /> Sale
        </span>
      </div>
      <div className="text-center text-gray-600">
        <h2 className="text-xl font-semibold">Heron Preston</h2>
        <h3 className="truncate text-ellipsis text-gray-500">
          Indian Flag print T-Shirt
        </h3>
        <div>
          <span className="text-xl font-semibold">
            ₹ 425 <strike className="text-gray-400">749</strike>
          </span>
        </div>
        <div className="flex justify-center gap-4 text-white font-semibold my-4">
          <button className="py-1 px-3 rounded w-20 bg-red-400 ">Buy</button>
          <button className="py-1 px-3 rounded w-20 bg-gray-700 ">Add</button>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
