import React from "react";
import { Dropdown } from "keep-react";
const OrderStatusHandler = () => {
  return (
    <div className="w-20 rounded-md ">
      <Dropdown
        label="Status"
        size="sm"
        arrowIcon={false}
        type=""
        dismissOnClick={true}
        className="bg-green-100 h-7"
      >
        <Dropdown.Item>Pending</Dropdown.Item>
        <Dropdown.Item>Confirm Order</Dropdown.Item>
        <Dropdown.Item>Shipped</Dropdown.Item>
        <Dropdown.Item>Out for delivery</Dropdown.Item>
        <Dropdown.Item>Delivered</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default OrderStatusHandler;
