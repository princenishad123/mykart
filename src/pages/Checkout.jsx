import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Checkout = () => {
  const { product } = useParams();
  console.log(product);
  return (
    <Layout>
      <div>Checkout</div>
    </Layout>
  );
};

export default Checkout;
