import React from "react";
import Layout from "../components/layout/Layout";

const OrderDetails = () => {
  return (
    <Layout>
      <div>
        <div className="w-full grid place-items-center h-full border">
          <div className="flex items-center">
            <section className="w-4 h-4 border rounded-full relative"></section>
            <div className="border-t h-1 w-44"></div>
            <section className="w-4 h-4 border rounded-full"></section>
            <div className="border-t h-1 w-44"></div>
            <section className="w-4 h-4 border rounded-full"></section>
            <div className="border-t h-1 w-44"></div>
            <section className="w-4 h-4 border rounded-full"></section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
