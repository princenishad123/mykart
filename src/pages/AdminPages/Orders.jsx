import React, { useContext } from "react";
import OrdersData from "../../components/AdminComponents/OrdersData";
import MyContext from "../../context/MyContext";

const Orders = () => {
  const { ordersData, setOrdersData } = useContext(MyContext);

  return (
    <div>
      <div
        className="bg-white p-2 overflow-x-scroll rounded-md"
        style={{ minHeight: "80vh" }}
      >
        <h1 className="text-xl font-semibold my-2">Orders</h1>
        <table className="table-fixed text-sm w-full max-lg:w-screen">
          <thead>
            <tr className="border-b  text-center ">
              <th className="text-start px-3 py-2 w-16">Image</th>
              <th className="text-start px-3  py-2">Id</th>
              <th className="text-start px-3 py-2">Name</th>
              <th className="text-start px-3 py-2">Product Name</th>
              <th className="text-start px-3 w-16 py-2">OTY</th>
              <th className="text-start px-3 w-24 py-2">Price</th>
              <th className="text-start px-3 w-44 py-2">Status</th>
            </tr>
          </thead>

          <tbody className="text-start text-gray-500">
            {ordersData.map((orders) =>
              orders.orderInfo.purchaseItem.map((doc, index) => (
                <OrdersData
                  key={index}
                  image={doc.image}
                  orderId={orders.id}
                  name={orders.orderInfo.name}
                  productName={doc.title}
                  qyt={1}
                  price={doc.price}
                  status={orders.status}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
