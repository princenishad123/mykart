import React from "react";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineShopping } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const SidebarComponent = () => {
  return (
    <ul className="p-4 text-gray-700">
      <NavLink to={"/account"}>
        <li
          className="py-1 px-2  my-3 hover:bg-blue-100 rounded-md flex items-center gap-4
        "
        >
          <span className="text-2xl">
            <VscAccount />
          </span>
          Account
        </li>
      </NavLink>
      <NavLink to={"/owner/admin"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <RiAdminLine />
          </span>
          Admin
        </li>
      </NavLink>
      <NavLink to={"/order"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <AiOutlineShopping />
          </span>
          Order
        </li>
      </NavLink>
      <NavLink to={"/all-cotegories"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <TbCategory />
          </span>
          Categories
        </li>
      </NavLink>

      <NavLink to={"/coupons"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <RiCoupon2Line />
          </span>
          Coupon
        </li>
      </NavLink>
      <NavLink to={"/notification"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <MdOutlineNotificationAdd />
          </span>
          Notification
        </li>
      </NavLink>
      <NavLink to={"/offer-zone"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <MdOutlineLocalOffer />
          </span>
          Offer zone
        </li>
      </NavLink>
      <NavLink to={"/help"}>
        <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
          <span className="text-2xl">
            <CiPhone />
          </span>
          Help center
        </li>
      </NavLink>
      <li className="py-1 px-2 my-3 hover:bg-blue-100 rounded-md flex items-center gap-4">
        <span className="text-2xl">
          <CiLogout />
        </span>
        <button>Log out</button>
      </li>
    </ul>
  );
};

export default SidebarComponent;
