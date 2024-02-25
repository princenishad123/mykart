import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import services from "../firebase/service";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import MyContext from "../context/MyContext";

const Order = () => {
  const userId = JSON.parse(localStorage.getItem("user")).uid;
  const [orders, setOrders] = useState([]);
  const { status, setStatus } = useContext(MyContext);
  setStatus(orders.status);

  useEffect(() => {
    services.getUserOrders(userId).then((res) => {
      const order = [];
      res.forEach((doc) => {
        order.push(doc.data());
      });
      setOrders(order);
    });
  }, []);

  const [copybutton, setCopyButton] = useState("copy");
  const copyOrderId = (id) => {
    navigator.clipboard.writeText(id);
    toast.success("order id copyed", {
      position: "top-center",
    });
  };

  return (
    <Layout title={"My orders"} description={"my orders"}>
      <div className="w-full  p-2 ">
        {orders.map((e) =>
          e.orderInfo.purchaseItem.map((doc, index) => (
            <NavLink>
              <div
                key={index}
                className="w-full border rounded-md bg-white my-3 gap-4 flex items-center min-h-24 p-3 max-md:flex-col max-md:items-start "
              >
                <div className="flex gap-4">
                  <div className="w-32 max-md:w-24 overflow-hidden grid place-items-center h-32 max-md:h-24 rounded">
                    <img src={doc.image} className="w-4/5" alt="" />
                  </div>
                  <div className="w-96 mx-2 max-lg:w-56 max-sm:w-4/5">
                    <h2 className="text-xl font-semibold my-1">{doc.title}</h2>

                    <p className="multipleLine  text-sm text-gray-600">
                      {doc.description}
                    </p>

                    <h2 className="text-sm text-gray-500 font-medium">
                      Date : {e.orderInfo.date}
                    </h2>
                  </div>
                </div>
                <div className="w-auto">
                  <h2 className="my-1  text-2xl font-semibold ">
                    ₹ {doc.price}
                  </h2>
                  <div className="flex gap-2">
                    <span className="text-gray-600 max-sm:text-sm ">
                      Order id : {e.id}
                    </span>
                    <button
                      onClick={() => copyOrderId(e.id)}
                      className="text-sm h-6 bg-gray-100  px-2 border rounded"
                    >
                      {copybutton}
                    </button>
                  </div>
                  <div className="flex text-xl font-medium gap-2 items-center">
                    <h2 className="text-gray-500">Status : </h2>
                    <h2 className="text-green-600 "> {e.status}</h2>
                  </div>
                </div>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Order;
