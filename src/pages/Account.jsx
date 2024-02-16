import React from "react";
import Layout from "../components/layout/Layout";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <Layout title={"Account"} description={"my account"}>
      <div className="w-full  flex">
        <div
          className="w-72  border-r max-md:hidden  p-4"
          style={{ height: "85vh" }}
        >
          <h2 className="text-xl font-semibold my-3">My Profile</h2>
          <div className="max-sm:w-11/12">
            <ul className="text-gray-600">
              <NavLink to={""}>
                <li className="py-1 my-2 flex items-center gap-2">User Info</li>
              </NavLink>

              <NavLink to={"/order"}>
                <li className="py-1 my-2 flex items-center gap-2">Orders</li>
              </NavLink>
              <NavLink to={"address"}>
                <li className="py-1 my-2 flex items-center gap-2">Address</li>
              </NavLink>
              <NavLink to={"watchlist"}>
                <li className="py-1 my-2 flex items-center gap-2">Watchlist</li>
              </NavLink>
              <NavLink to={"notification"}>
                <li className="py-1 my-2 flex items-center gap-2">
                  Notification
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="w-full h-auto ">
          {/* user image in some info */}
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default Account;
