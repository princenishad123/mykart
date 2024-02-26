import React, { useContext } from "react";
import { Dropdown } from "keep-react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../store/OrderStatusSlice";
import MyContext from "../../context/MyContext";
const OrderStatusHandler = ({ orderId, status }) => {
  const dispatch = useDispatch();

  function Orderstatus(e) {
    let status = e.target.innerHTML;
    let statusData = {
      status: status,
      orderId: orderId,
    };
    dispatch(changeStatus(statusData));
  }
  return (
    <div className="w-20 rounded-md ">
      <Dropdown
        label={status}
        size="sm"
        arrowIcon={false}
        type=""
        dismissOnClick={true}
        className="bg-green-100 h-7"
      >
        <Dropdown.Item>
          <button onClick={Orderstatus}>pending</button>
        </Dropdown.Item>
        <Dropdown.Item>
          <button onClick={Orderstatus}>order confirmed</button>
        </Dropdown.Item>

        <Dropdown.Item>
          <button onClick={Orderstatus}>shipped</button>
        </Dropdown.Item>

        <Dropdown.Item>
          <button onClick={Orderstatus}>out for delivery</button>
        </Dropdown.Item>
        <Dropdown.Item>
          {" "}
          <button onClick={Orderstatus}>delivered</button>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default OrderStatusHandler;
