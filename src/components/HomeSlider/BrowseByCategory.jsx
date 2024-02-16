import React from "react";
import { NavLink } from "react-router-dom";

const BrowseByCategory = () => {
  return (
    <div data-aos="zoom-in" className="w-full   h-auto py-4 bg-white">
      <div className="w-11/12 max-md:w-11/12 mx-auto bg-gray-100 h-44 py-2 mt-12 max-md:mt-4 max-md:px-2 px-12 flex items-center justify-between rounded-md ">
        <div className="">
          <h1 className="text-3xl max-md:text-2xl max-sm:text-xl my-2 font-semibold">
            Enhance Your <br /> Shopping Experience
          </h1>

          <a href="producSection">
            <button className="py-1 my-3 px-3 rounded-md bg-red-400 text-white">
              Order Now
            </button>
          </a>
        </div>
        <div className="">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/paper-shopping-bag-6874597-5655179.png"
            alt=""
            className="w-64 max-md:w-44 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
