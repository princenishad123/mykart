import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import Searchbar from "../../searchBar/Searchbar";
import { HiMiniBars3 } from "react-icons/hi2";
import SidebarComponent from "./SidebarComponet";
import { RxCross2 } from "react-icons/rx";
import { Dropdown } from "keep-react";
import services from "../../../firebase/service";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [sidebarHander, setSidebarHander] = useState(false);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const cartItem = localStorage.getItems("cart");

  const handleSidebar = (e) => {
    e.stopPropagation();
    if (sidebarHander == true) {
      setSidebarHander(false);
    }
  };
  let Icon = (
    <div className="w-12 h-12 rounded-full grid place-items-center overflow-hidden text-3xl">
      <PiUserCircleLight />
    </div>
  );

  const navigate = useNavigate();

  const logout = () => {
    services.logOut().then((res) => {
      console.log(res);
    });
    navigate("/");
  };
  return (
    <nav className="w-full  z-30 bg-white sticky top-0">
      {/* this is logo part */}
      <div className=" w-full h-14 px-6 max-sm:px-1  flex items-center justify-between">
        <div className="flex items-center mx-2 gap-3">
          <button
            onClick={() => setSidebarHander(!sidebarHander)}
            className="text-xl md:hidden"
          >
            {sidebarHander ? <RxCross2 /> : <HiMiniBars3 />}
          </button>
          <NavLink to={"/"}>
            <button className="text-2xl max-md:text-xl font-semibold">
              E-Shop
            </button>
          </NavLink>
        </div>

        {/* this is search part */}

        <div className="max-md:hidden">
          <Searchbar />
        </div>

        {/* this is menu part */}

        <div className="">
          <ul className="flex items-center">
            <NavLink to={"/cart"}>
              <li className="inline-block px-1 text-xl mt-1 mx-2 max-sm:mx-0 uppercase relative ">
                <IoCartOutline />
                <span className="absolute -top-2 h-6 w-6 pb-2  text-sm text-center -right-3">
                  {cartItem.length}
                </span>
              </li>
            </NavLink>
            <NavLink to={"/order"}>
              <li className="inline-block max-md:hidden px-1 mx-2 max-sm:mx-0 uppercase font-semibold text-sm">
                Orders
              </li>
            </NavLink>

            {isLoggedIn?.email === import.meta.env.VITE_ADMIN_EMAIL ? (
              <NavLink to={"/owner/admin"}>
                <li className="inline-block max-md:hidden px-1 mx-2 max-sm:mx-0 uppercase font-semibold text-sm">
                  Admin
                </li>
              </NavLink>
            ) : null}

            <li className="inline-block px-1  max-sm:mx-0 uppercase font-semibold text-sm  overflow-hidden">
              <Dropdown
                label={Icon}
                size="sm"
                type=""
                arrowIcon={false}
                dismissOnClick={true}
                className="w-12 h-12"
              >
                {isLoggedIn ? null : (
                  <NavLink to={"/sign-up"}>
                    <Dropdown.Item>Sing Up</Dropdown.Item>
                  </NavLink>
                )}

                {isLoggedIn ? null : (
                  <NavLink to={"/login"}>
                    <Dropdown.Item>Login</Dropdown.Item>
                  </NavLink>
                )}

                {isLoggedIn ? (
                  <NavLink to={"/account"}>
                    <Dropdown.Item>Account</Dropdown.Item>
                  </NavLink>
                ) : null}

                {isLoggedIn ? (
                  <NavLink to={"/account/address"} className={"md:hidden"}>
                    <Dropdown.Item>Address</Dropdown.Item>
                  </NavLink>
                ) : null}

                {isLoggedIn ? (
                  <NavLink to={"/account/watchlist"} className={"md:hidden"}>
                    <Dropdown.Item>Watchlist</Dropdown.Item>
                  </NavLink>
                ) : null}

                {isLoggedIn ? (
                  <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
                ) : null}
              </Dropdown>
            </li>
            {/* 
            <div className="text-xl max-md:hidden grid place-items-center border rounded-full  px-1 w-8 h-8">
              <button>
                <CiLight />
              </button>
            </div> */}
          </ul>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-14 h-auto w-full siderbarBackground ${
          sidebarHander ? " siderbarVisibale" : "siderbar"
        } `}
        onClick={handleSidebar}
      >
        <div
          className={` w-72 max-sm:w-4/6 siderbarManu h-screen border-r bg-white `}
        >
          <SidebarComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
