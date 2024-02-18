import React, { useContext, useEffect } from "react";
import StatusCard from "../../components/AdminComponents/StatusCard";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { TbCoinRupee } from "react-icons/tb";
import { PiUsersThree } from "react-icons/pi";
import Chart from "../../components/AdminComponents/Chart";
import services from "../../firebase/service";
import MyContext from "../../context/MyContext";

const Dashboard = () => {
  const { allUsers, setAllUsers } = useContext(MyContext);
  const { allProducts, setAllProducts } = useContext(MyContext);
  console.log(allUsers);
  return (
    <div>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex max-sm:w-full  flex-wrap max-sm:flex-col justify-start items-center my-2 gap-4">
        <StatusCard
          link={"users"}
          type={"Costumers"}
          value={allUsers.length}
          iconBg={"bg-orange-100"}
          textColor={"text-orange-600"}
          icon={<PiUsersThree />}
        />
        <StatusCard
          link={"orders"}
          type={"Orders"}
          value={80}
          iconBg={"bg-purple-100"}
          textColor={"text-purple-600"}
          icon={<PiShoppingCartSimpleLight />}
        />
        <StatusCard
          link={"products"}
          type={"Products"}
          value={allProducts.length}
          iconBg={"bg-green-100"}
          textColor={"text-green-600"}
          icon={<HiOutlineShoppingBag />}
        />
        <StatusCard
          type={"Earning"}
          value={200}
          iconBg={"bg-pink-100"}
          textColor={"text-pink-600"}
          icon={<TbCoinRupee />}
        />
        <StatusCard
          type={"Visitors"}
          value={200}
          iconBg={"bg-blue-100"}
          textColor={"text-blue-600"}
          icon={<PiUsersThree />}
        />
      </div>
      <div className="w-full mt-6 gap-4 flex max-lg:flex-col">
        <div className="w-full border bg-white rounded-md shadow-lg shadow-gray-200  h-auto">
          <h2 className="py-2 px-5 text-xl font-semibold">Revenue</h2>
          <Chart />
        </div>
        <div className="w-96 max-md:w-full border h-96 bg-white rounded-md shadow-lg shadow-gray-200"></div>
      </div>
    </div>
  );
};

export default Dashboard;
