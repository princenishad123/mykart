import React from "react";
import Layout from "../components/layout/Layout";
import SidebarForAdmin from "../components/AdminComponents/SiderbarForAdmin";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Layout title={"E-shop | Admin"} description={"admin"}>
      <div className="w-full border h-full  flex bg-gray-100 gap-2 ">
        <div
          className="w-72 max-lg:hidden border-r bg-white"
          style={{ height: "90vh" }}
        >
          <h1 className="text-2xl font-semibold my-2 px-3">Control Pannel</h1>
          <div>
            <SidebarForAdmin />
          </div>
        </div>
        <div className="w-full py-2 px-1 ">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
