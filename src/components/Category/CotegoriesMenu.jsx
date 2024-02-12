import React from "react";
import { NavLink } from "react-router-dom";

const ContegoriesMenu = () => {
  return (
    <div className="disableScrollBar  bg-white">
      <div className="w-full mt-2 h-8 ">
        <ul className="flex border-b pb-3 disableScrollBar overflow-x-scroll h-full max-xl:justify-start justify-center px-3 text-gray-500 gap-4 font-semibold text-md items-center ">
          <NavLink to={"/mobile"}>
            <li className="px-2 hover:bg-gray-100 truncate">Mobile</li>
          </NavLink>
          <NavLink to={"/glocery"}>
            <li className="px-2 hover:bg-gray-100 truncate">Glocery</li>
          </NavLink>
          <NavLink to={"/glocery"}>
            <li className="px-2 hover:bg-gray-100 truncate">Men's T shirt</li>
          </NavLink>
          <NavLink to={"/fashion"}>
            <li className="px-2 hover:bg-gray-100 truncate">Fashion</li>
          </NavLink>
          <NavLink to={"/electronic"}>
            <li className="px-2 hover:bg-gray-100 truncate">Electronic</li>
          </NavLink>
          <NavLink to={"/home-furniture"}>
            <li className="px-2 hover:bg-gray-100 truncate">
              Home & Furniture
            </li>
          </NavLink>
          <NavLink to={"/toys"}>
            <li className="px-2 hover:bg-gray-100 truncate">Toys</li>
          </NavLink>
          <NavLink to={"/beauty"}>
            <li className="px-2 hover:bg-gray-100 truncate">Beauty</li>
          </NavLink>
          <NavLink to={"/shooses"}>
            <li className="px-2 hover:bg-gray-100 truncate">Shooses</li>
          </NavLink>
          <NavLink to={"/baby"}>
            <li className="px-2 hover:bg-gray-100 truncate">Baby</li>
          </NavLink>
          <NavLink to={"/bag"}>
            <li className="px-2 hover:bg-gray-100 truncate">Bags</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default ContegoriesMenu;
