import React from "react";
import OrderStatusHandler from "../AdminComponents/OrderStatusHandler";

const OrdersData = () => {
  return (
    <tr className="border-b cursor-pointer hover:bg-slate-50">
      <td className="">
        <div className="w-12 h-12 rounded-full border"></div>
      </td>
      <td className=" truncate">The Sliding Mr. Bones</td>
      <td className=" py-2 px-3 truncate">Malcolm Lockyer</td>
      <td className=" py-2 px-3 truncate">1961</td>
      <td className=" py-2 px-3 truncate">1961</td>
      <td className=" py-2 px-3 truncate">1961</td>
      <td className=" py-2 px-3 truncate text-green-500">
        <OrderStatusHandler />
      </td>
      <td className=" py-2 px-3 truncate">up</td>
    </tr>
  );
};

export default OrdersData;
