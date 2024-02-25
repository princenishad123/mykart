import React from "react";
import OrderStatusHandler from "../AdminComponents/OrderStatusHandler";

const OrdersData = ({
  image,
  orderId,
  name,
  productName,
  status,
  qyt,
  price,
}) => {
  return (
    <tr className="border-b cursor-pointer my-2 hover:bg-slate-50">
      <td className=" py-2">
        <div className="w-12 h-12 rounded-full grid place-items-center border overflow-hidden">
          <img src={image} className="w-4/5" alt="" />
        </div>
      </td>
      <td className=" truncate">{orderId}</td>
      <td className=" py-2 px-3 truncate my-2 capitalize">{name}</td>
      <td className=" py-2 px-3 truncate my-2 capitalize">{productName}</td>
      <td className=" py-2 px-3 truncate">{qyt}</td>
      <td className=" py-2 px-3 truncate font-semibold my-2">₹ {price}</td>
      <td className=" py-2 px-3 truncate my-2 capitalize text-green-500">
        <OrderStatusHandler orderId={orderId} status={status} />
      </td>
    </tr>
  );
};

export default OrdersData;
